import React from 'react'
import { View, FlatList } from 'react-native'
import { Logo, Screen } from '@components/atoms'
import { AlertItem, ResultState } from '@components/molecules'
import strings from '@localization'
import { Images } from '@res/img'
import { Spinner, Text, useTheme } from '@ui-kitten/components'
import { styles } from './StockHistory.style'
import usePriceAlerts from '@hooks/usePriceAlerts'
import { useNavigation } from '@react-navigation/native'
import { StockHistoryStackParams } from 'types/navigation'

const StockHistory = () => {

  const { alerts, isLoadingAlerts } = usePriceAlerts();
  const { navigate } = useNavigation<StockHistoryStackParams<"StockHistoryScreen">["navigation"]>();
  const theme = useTheme()

  const onGoToChart = (symbol: string) => navigate("StockChartScreen", { symbol });

  return (
    <Screen>
      <Logo />
      <View style={styles.header}>
        <Text category='h5'>{strings.stockHistory.historyTitle}</Text>
        <Text>{strings.stockHistory.historySubtitle}</Text>
      </View>

      {isLoadingAlerts ?
        <Spinner />
        : <FlatList
          data={alerts}
          renderItem={({ item }) =>
            <AlertItem
              name={item.symbol}
              price={item.price}
              icon='chevron-right'
              iconBgColor={theme["color-primary-400"]}
              onPress={() => onGoToChart(item.symbol)}
            />
          }
          ListEmptyComponent={() =>
            <ResultState
              image={Images.EmptyAlerts}
              title={strings.stockHistory.emptyStocks}
              subtitle={strings.stockHistory.emptyStocksDescription}
            />
          }
        />
      }


    </Screen>
  )
}

export default StockHistory