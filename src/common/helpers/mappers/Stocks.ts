import { Trade } from "types/api/websocket";
import { Stock } from "types/general/entities";

function toStock(trade: Trade): Stock {
  const { s, v, t, p } = trade

  return {
    symbol: s,
    volume: v,
    time: t,
    lastPrice: p,
  }
}

export default {
  toStock
}