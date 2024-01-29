
export interface StockSymbolAPI {
  currency: string;
  description: string;
  displaySymbol: string;
  figi: string;
  mic: string;
  symbol: string;
  type: string;
}

export interface HistoryValue {
  period: string
  v: number
}

export interface Metrics {
  "10DayAverageTradingVolume": number,
  "52WeekHigh": number,
  "52WeekLow": number,
  "52WeekLowDate": string,
  "52WeekPriceReturnDaily": number,
  "beta": number,
}


export interface StockHistoryAPI {
  metric: Metrics
  metricType: "all",
  symbol: string,
  series: {
    annual: {
      currentRatio: HistoryValue[]
      salesPerShare: HistoryValue[]
      netMargin: HistoryValue[]
    }
  }
}

