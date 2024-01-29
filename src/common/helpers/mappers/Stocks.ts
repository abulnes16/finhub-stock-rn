import { HistoryValue, Metrics } from "types/api/api";
import { Trade } from "types/api/websocket";
import { Stock, StockHistory } from "types/general/entities";
import { getMonthName } from "../transformers/date";

function toStock(trade: Trade): Stock {
  const { s, v, t, p } = trade

  return {
    symbol: s,
    volume: v,
    time: t,
    lastPrice: p,
  }
}

function toStockChart(salesPerShare: HistoryValue[], metric: Metrics): StockHistory {
  const mappedChartData = salesPerShare.map((value) => {
    const periodParts = value.period.split("-");
    const month = Number(periodParts[1])
    const monthName = getMonthName(month);

    return { monthName, value: value.v }
  })


  let repeteadMonths: string[] = []
  const months = mappedChartData.filter(data => {
    if (!repeteadMonths.includes(data.monthName)) {
      repeteadMonths.push(data.monthName)
      return true
    }
    return false
  })
    .map((data) => data.monthName)

  const values = mappedChartData.map(data => data.value);
  let monthName = ""
  if (repeteadMonths.length === 1) {
    monthName = months[0]
  }

  return {
    month: monthName,
    data: values,
    labels: repeteadMonths.length > 1 ? months : [],
    metric
  }
}

export default {
  toStock,
  toStockChart
}