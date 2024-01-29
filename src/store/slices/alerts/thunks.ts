import AsyncStorage from "@react-native-async-storage/async-storage"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { ALERTS_KEY } from "../../../common/constants/storage"
import { PriceAlert } from "types/general/entities"

const actions = {
  loadAlerts: "ALERTS/LOAD_ALERTS",
}


export const loadAlerts = createAsyncThunk(
  actions.loadAlerts,
  async (_, { rejectWithValue }) => {
    try {
      const alertsString = await AsyncStorage.getItem(ALERTS_KEY);

      if (!alertsString) {
        return []
      }

      const parsedAlerts: PriceAlert[] = JSON.parse(alertsString);

      return parsedAlerts
    } catch (error) {
      return rejectWithValue([]);
    }
  }
)

