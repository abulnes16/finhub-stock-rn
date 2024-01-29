import { useEffect, useState } from "react";
import { StockSymbolAPI } from "types/api/api";
import { useAppDispatch, useAppSelector } from "./useStore";
import { fetchStockSymbols } from "@store/slices/stocks";
import { StockSelectors } from "@store/slices/stocks/slice";

const useFinnhub = () => {

  const dispatch = useAppDispatch()
  const loading = useAppSelector(StockSelectors.getStockLoader)
  const error = useAppSelector(StockSelectors.getStockError)
  const stockSymbols = useAppSelector(StockSelectors.getStockSymbols)


  const fetchSymbols = () => dispatch(fetchStockSymbols())


  useEffect(() => {
    if (stockSymbols.length === 0) {
      fetchSymbols()
    }
  }, []);

  return {
    loading,
    error,
    stockSymbols,
    fetchStockSymbols,
  }

}

export default useFinnhub;