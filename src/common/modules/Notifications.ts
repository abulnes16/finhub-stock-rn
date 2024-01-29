import PushNotifications from 'react-native-push-notification'

class Notifications {
  constructor() {
    PushNotifications.configure({
      onRegister: (token) => {
        console.log("Token", token);
      },
      onNotification: (notification) => {
        console.log("Notification", notification);
      },
      popInitialNotification: true,
      requestPermissions: false,
    })

    PushNotifications.createChannel(
      {
        channelId: "priceAlerts",
        channelName: "Price Alert Notifications",
        channelDescription: "An alert for stocks"
      }, () => { }
    )

    PushNotifications.getScheduledLocalNotifications(rn => {
      console.log("SN --", rn);
    })
  }

  scheduleNotification(date: Date, symbol: string) {
    PushNotifications.localNotificationSchedule({
      channelId: "priceAlerts",
      title: "Price went up!",
      message: `The price of ${symbol} went higher that the configured price`,
      date
    })
  }
}

export default new Notifications();