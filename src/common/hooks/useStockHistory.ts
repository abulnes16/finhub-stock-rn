import { finnhubApi } from "@api";
import Stocks from "@helpers/mappers/Stocks";
import { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import { StockHistory } from "types/general/entities";

const useStockHistory = (symbol: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [stockHistory, setStockHistory] = useState<StockHistory>();



  const fetchStockHistory = async () => {
    try {
      setLoading(true)
      const result = await finnhubApi.getBasicFinancials(symbol);

      if (result.status !== HttpStatusCode.Ok) {
        throw result
      }
      const { series, metric } = result.data

      if (series.annual) {
        const { salesPerShare } = series.annual

        const stockChartHistory = Stocks.toStockChart(salesPerShare, metric)

        setStockHistory(stockChartHistory)
        return
      }
      setStockHistory(undefined)
    } catch (error) {
      setError(true);
      setStockHistory(undefined);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStockHistory()
  }, []);


  return {
    loading,
    error,
    stockHistory,
    fetchStockHistory,
  }


}


export default useStockHistory;