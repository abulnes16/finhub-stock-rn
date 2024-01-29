import { Metrics } from "types/api/api"

export interface Stock {
  symbol: string,
  lastPrice: number,
  time: number
  volume: number
}

export interface PriceAlert {
  symbol: string
  price: number
}

export interface StockHistory {
  month: string
  labels: string[]
  data: number[]
  metric: Metrics
}