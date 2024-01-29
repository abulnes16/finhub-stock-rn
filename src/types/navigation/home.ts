import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type AlertParams = {
  PriceAlertsScreen: undefined
  AddAlertsScreen: undefined
}

export type AlertStackParams<T extends keyof AlertParams> =
  NativeStackScreenProps<AlertParams, T>

export type HomeParams = {
  PriceAlertStack: undefined
  StockHistoryScreen: undefined
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