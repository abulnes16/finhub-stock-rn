import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PriceAlertsScreen, ProfileScreen, StockHistoryScreen, WatchlistScreen } from '@screens/home';
import { HomeParams } from 'types/navigation';
import { BottomTabBar } from "@components/organisms";
import AlertStackNavigator from "./AlertsStackNavigator";
import StockHistoryNavigator from "./StockHistoryNavigator";

const HomeTabs = createBottomTabNavigator<HomeParams>();

const HomeBottomTabsNavigator = () => {
  return (
    <HomeTabs.Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabBar {...props} />} >
      <HomeTabs.Screen name="PriceAlertStack" component={AlertStackNavigator} />
      <HomeTabs.Screen name="WatchlistScreen" component={WatchlistScreen} />
      <HomeTabs.Screen name="StockHistoryStack" component={StockHistoryNavigator} />
      <HomeTabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </HomeTabs.Navigator>
  );
}

export default HomeBottomTabsNavigator