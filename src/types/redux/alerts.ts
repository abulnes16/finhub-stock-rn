import { PriceAlert } from "types/general/entities";

export interface AlertsSlice {
  alerts: PriceAlert[],
  isLoading: boolean
}