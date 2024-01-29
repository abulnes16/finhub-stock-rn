import { StockSymbolAPI } from "types/api/api";

export interface StocksSlice {
  stockSymbols: StockSymbolAPI[]
  isLoading: boolean
  error: boolean
}