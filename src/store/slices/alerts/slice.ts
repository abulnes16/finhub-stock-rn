import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PriceAlert } from "types/general/entities";
import { AlertsSlice } from "types/redux/alerts";
import { loadAlerts } from "./thunks";
import { RootState } from "@store/store";


const initialState: AlertsSlice = {
  alerts: [],
  isLoading: false
}

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<PriceAlert>) => {
      state.alerts = [...state.alerts, action.payload]
    },
    removeAlert: (state, action: PayloadAction<string>) => {
      state.alerts = state.alerts.filter(alert => alert.symbol !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadAlerts.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(loadAlerts.fulfilled, (state, action) => {
      state.isLoading = false,
        state.alerts = action.payload
    })

    builder.addCase(loadAlerts.rejected, (state) => {
      state.isLoading = false
    })
  }
})


export const AlertsSelectors = {
  getAlerts: (state: RootState) => state.alerts.alerts,
  getAlertLoader: (state: RootState) => state.alerts.isLoading,
}

export const { addAlert, removeAlert } = alertSlice.actions

export default alertSlice.reducer