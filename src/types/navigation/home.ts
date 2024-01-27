import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"

export type HomeParams = {
  PriceAlertsScreen: undefined
  StockHistoryScreen: undefined
  WatchlistScreen: undefined
}


export type HomeStackParams<T extends keyof HomeParams> =
  BottomTabScreenProps<HomeParams, T>

export interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}