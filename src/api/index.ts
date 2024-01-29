import axios, { Axios } from "axios";
import Config from "react-native-config";
import { StockHistoryAPI, StockSymbolAPI } from "types/api/api";

class FinnhubApi {

  private client: Axios
  constructor() {
    this.client = axios.create({
      baseURL: "https://finnhub.io/api/v1",
      headers: { "X-Finnhub-Token": Config.FINHUB_API_SECRET }
    }
    );
  }

  getStockSymbols(exchange: string = "US") {
    return this.client.get<StockSymbolAPI[]>(`/stock/symbol?exchange=${exchange}`)
  }

  getBasicFinancials(symbol: string) {
    return this.client.get<StockHistoryAPI>(`/stock/metric?symbol=${symbol}&metric=all`)
  }



}


export const finnhubApi = new FinnhubApi();