import strings from "@localization";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab, Icon } from "@ui-kitten/components";


const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={<Icon name="clock" />} title={strings.navigation.watchlistTab} />
    <BottomNavigationTab icon={<Icon name="trending-up" />} title={strings.navigation.stockPriceHistoryTab} />
    <BottomNavigationTab icon={<Icon name="pricetags" />} title={strings.navigation.alertTab} />
  </BottomNavigation>
);

export default BottomTabBar;