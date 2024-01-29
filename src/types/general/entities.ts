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