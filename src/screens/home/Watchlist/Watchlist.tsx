import React from 'react'
import { View, FlatList } from 'react-native'
import { Logo, Screen } from '@components/atoms'
import { styles } from './Watchlist.style'
import { Text } from '@ui-kitten/components'
import strings from '@localization'
import { StockItem } from '@components/molecules'
import { Stock } from 'types/general/entities'
import useWatchList from '@hooks/useWatchList'

const mockStocks: Stock[] = [
  { symbol: "BTC/USD", lastPrice: 41946.05, time: 100, volume: 0.04 },
  { symbol: "BTC/USD", lastPrice: 41946.05, time: 100, volume: 0.04 },
  { symbol: "BTC/USD", lastPrice: 41946.05, time: 100, volume: 0.04 },
  { symbol: "BTC/USD", lastPrice: 41946.05, time: 100, volume: 0.04 }
]


const Watchlist = () => {

  //const watchlist = useWatchList();


  return (
    <Screen>
      <Logo style={styles.logo} />
      <View style={styles.header}>
        <Text category='h5'>{strings.watchlist.subtitle}</Text>
      </View>

      <FlatList
        data={mockStocks}
        renderItem={
          ({ item }) => <StockItem key={item.time} stock={item}
          />
        }
      />
    </Screen>
  )
}

export default Watchlist