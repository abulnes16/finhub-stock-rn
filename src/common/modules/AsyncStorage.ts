import AsyncStorage from "@react-native-async-storage/async-storage";
import { PriceAlert } from "types/general/entities";
import { ALERTS_KEY } from "../constants/storage";



export function saveAlertsInStorage(alerts: PriceAlert[]) {
  return AsyncStorage.setItem(ALERTS_KEY, JSON.stringify(alerts))
}

export function getAlertsInStorage() {
  return AsyncStorage.getItem(ALERTS_KEY);
}