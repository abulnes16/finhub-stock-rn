import React from 'react'
import { View, FlatList } from 'react-native'
import { Logo, Screen } from '@components/atoms'
import { styles } from './Watchlist.style'
import { Text } from '@ui-kitten/components'
import strings from '@localization'
import { ResultState, StockItem } from '@components/molecules'
import { Stock } from 'types/general/entities'
import useWatchList from '@hooks/useWatchList'
import { Images } from '@res/img'

const mockStocks: Stock[] = [
  { symbol: "BTC/USD", lastPrice: 41946.05, time: 100, volume: 0.04 },
  { symbol: "BTC/USD", lastPrice: 41946.05, time: 100, volume: 0.04 },
  { symbol: "BTC/USD", lastPrice: 41946.05, time: 100, volume: 0.04 },
  { symbol: "BTC/USD", lastPrice: 41946.05, time: 100, volume: 0.04 }
]


const Watchlist = () => {

  const { watchedStocks } = useWatchList();


  return (
    <Screen>
      <Logo style={styles.logo} />
      <FlatList
        ListHeaderComponent={
          watchedStocks.length !== 0 ?
            <View style={styles.header}>
              <Text category='h5'>{strings.watchlist.subtitle}</Text>
            </View> : undefined
        }
        data={watchedStocks}
        renderItem={
          ({ item }) => <StockItem key={item.time} stock={item}
          />
        }
        ListEmptyComponent={() =>
          <ResultState
            image={Images.EmptyAlerts}
            title={strings.watchlist.emptyWatchedStock}
            subtitle={strings.watchlist.emptyWatchedStockDescription}
          />}
      />
    </Screen>
  )
}

export default Watchlist