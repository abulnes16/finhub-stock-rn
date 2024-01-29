import { finnhubApi } from "@api";
import { getMonthName } from "@helpers/transformers";
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

        const mappedChartData = salesPerShare.map((value) => {
          const periodParts = value.period.split("-");
          const month = Number(periodParts[1])
          const monthName = getMonthName(month);

          return { monthName, value: value.v }
        })



        const monthName = mappedChartData[0].monthName
        const values = mappedChartData.map(data => data.value);
        setStockHistory({
          month: monthName,
          data: values,
          labels: [],
          metric
        })
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