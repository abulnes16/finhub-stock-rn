import Notifications from "@modules/Notifications";
import { PriceAlert, Stock } from "types/general/entities";


export function schedulePriceNotification(stocks: Stock[], alerts: PriceAlert[]) {

  alerts.forEach((alert) => {
    const newStock = stocks.find(stock => stock.symbol === alert.symbol)

    if (newStock && newStock.lastPrice > alert.price) {
      const nowPlusTwoMinutes = new Date()
      nowPlusTwoMinutes.setMinutes(nowPlusTwoMinutes.getMinutes() + 2)
      Notifications.scheduleNotification(nowPlusTwoMinutes, alert.symbol)
    }
  })
}