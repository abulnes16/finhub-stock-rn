import { finnhubApi } from "@api"
import strings from "@localization";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { HttpStatusCode } from "axios";
import Toast from "react-native-toast-message";

const actions = {
  fetchStockSymbols: "STOCKS/FETCH_STOCK_SYMBOLS",
}

export const fetchStockSymbols = createAsyncThunk(
  actions.fetchStockSymbols,
  async (_, { rejectWithValue }) => {
    try {
      const result = await finnhubApi.getStockSymbols();
      if (result.status !== HttpStatusCode.Ok) {
        throw result
      }

      return result.data
    } catch (error) {
      Toast.show({
        type: "error",
        text1: strings.api.fetchSymbolsTitle,
        text2: strings.api.fetchSymbolsError
      })
      return rejectWithValue([]);
    }
  }
)