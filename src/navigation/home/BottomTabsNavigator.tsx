import React from "react"
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PriceAlertsScreen, StockHistoryScreen, WatchlistScreen } from '@screens/home';
import { HomeParams } from 'types/navigation';
import { BottomTabBar } from "@components/organisms";

const HomeTabs = createBottomTabNavigator<HomeParams>();

const HomeBottomTabsNavigator = () => {



  return (
    <HomeTabs.Navigator tabBar={props => <BottomTabBar {...props} />} >
      <HomeTabs.Screen name="WatchlistScreen" component={WatchlistScreen} />
      <HomeTabs.Screen name="StockHistoryScreen" component={StockHistoryScreen} />
      <HomeTabs.Screen name="PriceAlertsScreen" component={PriceAlertsScreen} />
    </HomeTabs.Navigator>
  );
}

export default HomeBottomTabsNavigator