import { createSlice } from "@reduxjs/toolkit";
import { StocksSlice } from "types/redux/stocks";
import { fetchStockSymbols } from "./thunks";
import { RootState } from "@store/store";


const initialState: StocksSlice = {
  stockSymbols: [],
  isLoading: false,
  error: false,
}

const stockSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStockSymbols.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchStockSymbols.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = false
      state.stockSymbols = action.payload
    })

    builder.addCase(fetchStockSymbols.rejected, (state) => {
      state.isLoading = false
      state.error = true
    })
  }
})


export const StockSelectors = {
  getStockSymbols: (state: RootState) => state.stocks.stockSymbols,
  getStockLoader: (state: RootState) => state.stocks.isLoading,
  getStockError: (state: RootState) => state.stocks.error
}




export default stockSlice.reducer