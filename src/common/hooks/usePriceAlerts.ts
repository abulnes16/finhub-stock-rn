import { AlertsSelectors, addAlert, loadAlerts, removeAlert } from "@store/slices/alerts";
import { useAppDispatch, useAppSelector } from "./useStore";
import { useEffect, useState } from "react";
import { PriceAlert } from "types/general/entities";
import Toast from "react-native-toast-message";
import strings from "@localization";
import { saveAlertsInStorage } from "@modules/AsyncStorage";

const usePriceAlerts = () => {

  const dispatch = useAppDispatch();
  const alerts = useAppSelector(AlertsSelectors.getAlerts);
  const isLoadingAlerts = useAppSelector(AlertsSelectors.getAlertLoader);
  const [loadingOperation, setLoadingOperation] = useState(false);

  useEffect(() => {
    if (alerts.length === 0) {
      dispatch(loadAlerts());
    }
  }, []);

  const saveAlert = async (alert: PriceAlert) => {
    try {
      setLoadingOperation(true);
      dispatch(addAlert(alert))
      await saveAlertsInStorage([...alerts, alert]);
      return true
    } catch (error) {
      Toast.show({
        type: "error",
        text1: strings.alerts.alertErrorTitle,
        text2: strings.alerts.saveError
      })

      return false;
    } finally {
      setLoadingOperation(false)
    }
  }

  const deleteAlert = async (symbol: string) => {
    try {
      setLoadingOperation(true);
      dispatch(removeAlert(symbol))
      const filteredAlerts = alerts.filter(alert => alert.symbol !== symbol)
      await saveAlertsInStorage(filteredAlerts);
      return true
    } catch (error) {
      Toast.show({
        type: "error",
        text1: strings.alerts.alertErrorTitle,
        text2: strings.alerts.removeError
      })
      return false;
    }
    finally {
      setLoadingOperation(false)
    }
  }

  return {
    alerts,
    isLoadingAlerts,
    saveAlert,
    deleteAlert,
    loadingOperation,
  }

}


export default usePriceAlerts;