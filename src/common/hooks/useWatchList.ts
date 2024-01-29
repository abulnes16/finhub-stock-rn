import { useCallback, useEffect, useState } from "react";
import Config from "react-native-config";
import { AlertsSelectors } from "@store/slices/alerts";
import Toast from "react-native-toast-message";
import strings from "@localization";
import { createSelector } from "@reduxjs/toolkit";
import { store } from "@store/store";
import { StocksMapper } from "@helpers/mappers";
import { Trade } from "types/api/websocket";
import { Stock } from "types/general/entities";
import { schedulePriceNotification } from "@helpers/transformers/stocks";
import { useAppSelector } from "./useStore";

const useWatchList = () => {

  const alertSymbols = createSelector([AlertsSelectors.getAlerts], (alerts) => alerts.map(alert => alert.symbol));
  const alerts = useAppSelector(AlertsSelectors.getAlerts);

  const symbols = alertSymbols(store.getState())

  const stocksForWebSocket = useCallback((type: "subscribe" | "unsubscribe") =>
    symbols.map(
      symbol => JSON.stringify({ type, symbol: `${symbol}USDT` })
    ), [alertSymbols]
  );

  const [watchedStocks, setWatchedStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const finnhubWebSocket = new WebSocket(`wss://ws.finnhub.io?token=${Config.FINHUB_API_SECRET}`);
    finnhubWebSocket.onopen = () => {
      const subscribedStocks = stocksForWebSocket("subscribe")
      subscribedStocks.forEach(stock => finnhubWebSocket.send(stock))
      /*  finnhubWebSocket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" }))
       finnhubWebSocket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:ETHUSDT" })) */

    }

    finnhubWebSocket.onmessage = (event) => setTimeout(() => {
      const parsedData = JSON.parse(event.data);
      if (!parsedData) {
        return
      }

      if (!parsedData.data || parsedData.type !== "trade") {
        return
      }


      const stockData = parsedData.data

      if (stockData.length > 0) {
        processWebSocketResponse(stockData);
      }

    }, 5000)

    finnhubWebSocket.onerror = (error) => {
      console.log(JSON.stringify(error, null, 2))
      Toast.show({
        type: "error",
        text1: strings.watchlist.watchError,
        text2: strings.watchlist.watchErrorDescription
      })
    }

    finnhubWebSocket.onclose = (event) => {
      const unsubscribeStocks = stocksForWebSocket("unsubscribe");
      unsubscribeStocks.forEach(stock =>
        finnhubWebSocket.send(stock)
      )
      /* 
            finnhubWebSocket.send(JSON.stringify({ type: "unsubscribe", symbol: "BINANCE:BTCUSDT" }))
            finnhubWebSocket.send(JSON.stringify({ type: "unsubscribe", symbol: "BINANCE:ETHUSDT" })) */
    }

    return () => {
      finnhubWebSocket.close()
    }

  }, [symbols]);

  const processWebSocketResponse = (stockData: Trade[]) => {

    let filteredStocks: string[] = []
    const mappedStocks = stockData.map((serverStock: Trade) => StocksMapper.toStock(serverStock))
    const cleanStocks = mappedStocks.filter(stock => {
      if (!filteredStocks.includes(stock.symbol)) {
        filteredStocks.push(stock.symbol)
        return true
      }

      return false
    })

    // Check for price alerts
    schedulePriceNotification(cleanStocks, alerts)

    if (watchedStocks.length === 0) {
      setWatchedStocks(cleanStocks);
      return;
    }

    const updatedStocks = watchedStocks.map(stock => {
      const newStock = cleanStocks.find(cleanStock => cleanStock.symbol === stock.symbol)

      if (newStock && newStock.lastPrice !== stock.lastPrice) {
        return { ...stock, lastPrice: newStock.lastPrice }
      }
      return stock
    })

    setWatchedStocks(updatedStocks)


  }

  return {
    watchedStocks,
  }

}


export default useWatchList;