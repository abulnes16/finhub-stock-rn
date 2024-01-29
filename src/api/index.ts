import axios, { Axios } from "axios";
import Config from "react-native-config";
import { StockSymbolAPI } from "types/api/api";

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



}


export const finnhubApi = new FinnhubApi();