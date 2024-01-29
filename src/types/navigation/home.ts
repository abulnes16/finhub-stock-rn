import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type AlertParams = {
  PriceAlertsScreen: undefined
  AddAlertsScreen: undefined
}


export type AlertStackParams<T extends keyof AlertParams> =
  NativeStackScreenProps<AlertParams, T>


export type StockHistoryParams = {
  StockHistoryScreen: undefined
  StockChartScreen: { symbol: string }
}

export type StockHistoryStackParams<T extends keyof StockHistoryParams> =
  NativeStackScreenProps<StockHistoryParams, T>

export type HomeParams = {
  PriceAlertStack: undefined
  StockHistoryStack: undefined
  WatchlistScreen: undefined
  ProfileScreen: undefined
}


export type HomeStackParams<T extends keyof HomeParams> =
  BottomTabScreenProps<HomeParams, T>

export interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}