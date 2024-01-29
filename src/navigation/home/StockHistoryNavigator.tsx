import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StockHistoryParams } from 'types/navigation';
import { StockChartScreen, StockHistoryScreen } from '@screens/home';

const StockHistory = createNativeStackNavigator<StockHistoryParams>();

const StockHistoryNavigator = () => {
  return (
    <StockHistory.Navigator screenOptions={{ headerShown: false }}>
      <StockHistory.Screen name='StockHistoryScreen' component={StockHistoryScreen} />
      <StockHistory.Screen name='StockChartScreen' component={StockChartScreen} />
    </StockHistory.Navigator>
  )
}

export default StockHistoryNavigator