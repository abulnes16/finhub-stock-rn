import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AlertParams } from 'types/navigation';
import { AddAlertsScreen, PriceAlertsScreen } from '@screens/home';

const AlertStack = createNativeStackNavigator<AlertParams>();

const AlertStackNavigator = () => {
  return (
    <AlertStack.Navigator screenOptions={{ headerShown: false }}>
      <AlertStack.Screen name='PriceAlertsScreen' component={PriceAlertsScreen} />
      <AlertStack.Screen name='AddAlertsScreen' component={AddAlertsScreen} />
    </AlertStack.Navigator>
  )
}

export default AlertStackNavigator