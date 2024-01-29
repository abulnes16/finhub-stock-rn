import strings from "@localization";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab, Icon } from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => {

  const { bottom } = useSafeAreaInsets();

  return (
    <BottomNavigation
      style={{ paddingBottom: bottom }}
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={<Icon name="pricetags" />} title={strings.navigation.alertTab} />
      <BottomNavigationTab icon={<Icon name="clock" />} title={strings.navigation.watchlistTab} />
      <BottomNavigationTab icon={<Icon name="trending-up" />} title={strings.navigation.stockPriceHistoryTab} />
      <BottomNavigationTab icon={<Icon name="person" />} title={strings.navigation.profileTab} />
    </BottomNavigation>
  )

}



export default BottomTabBar;