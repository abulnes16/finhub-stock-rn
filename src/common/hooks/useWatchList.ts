import { useEffect, useRef } from "react";
import Config from "react-native-config";

const useWatchList = () => {


  useEffect(() => {
    const finnhubWebSocket = new WebSocket(`wss://ws.finnhub.io?token=${Config.FINHUB_API_SECRET}`);
    finnhubWebSocket.onopen = () => {
      finnhubWebSocket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'BINANCE:ETHUSDT' }))
      finnhubWebSocket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'BINANCE:BTCUSDT' }))
      finnhubWebSocket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'BINANCE:EURUSDT' }))
    }

    finnhubWebSocket.onmessage = (event) => {
      console.log(JSON.stringify(event.data, null, 2))
    }

    finnhubWebSocket.onerror = (error) => {
      console.log("Finhub Error:", error);
    }

    finnhubWebSocket.onclose = (event) => {
      finnhubWebSocket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': 'AAPL' }))
      finnhubWebSocket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': 'BINANCE:BTCUSDT' }))
      finnhubWebSocket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': 'IC MARKETS:1' }))
    }

    return () => {
      finnhubWebSocket.close()
    }

  }, []);

  return {}

}


export default useWatchList;