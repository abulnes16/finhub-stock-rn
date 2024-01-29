import React, { useEffect, useRef } from 'react'
import { View, ViewStyle } from 'react-native'
import { Card, CardProps, Icon, Text, useTheme } from '@ui-kitten/components'
import { Stock } from 'types/general/entities'
import { styles } from './StockItem.style'

interface StockItemProps extends CardProps {
  stock: Stock,
  style?: ViewStyle
}

const StockItem = ({ stock, style, ...props }: StockItemProps) => {

  const previousVolume = useRef<number>(0);
  const previousTime = useRef<number>(0)

  const theme = useTheme();

  useEffect(() => {
    if (previousTime.current === 0 || previousTime.current < stock.time) {
      previousTime.current = stock.time
    }
    if (previousVolume.current === 0 || previousTime.current < stock.time) {
      previousVolume.current = stock.volume
    }

  }, [stock]);


  const getStockVolumeStatus = () => {
    if (previousVolume.current < stock.volume) {
      return { status: "danger", icon: "arrow-down", iconColor: theme["color-danger-400"] }
    }

    if (previousVolume.current > stock.volume) {
      return { status: "success", icon: "arrow-up", iconColor: theme["color-success-400"] }
    }

    return { status: "basic", icon: "code", iconColor: "" }
  }

  const stockStatus = getStockVolumeStatus();

  return (
    <Card style={[styles.item, style]} {...props}>
      <View style={styles.priceRow}>
        <Text category='s1'>{stock.symbol}</Text>
        <Text category='s2'>{stock.lastPrice}</Text>
      </View>
      <View style={styles.marginalChangeContainer}>
        <Icon style={styles.stockVolumeIcon} name={stockStatus.icon} fill={stockStatus.iconColor} />
        <Text category='h5' status={stockStatus.status}>{(stock.volume * 100).toFixed(2)}%</Text>
      </View>
    </Card>
  )
}

export default StockItem