import React from 'react'
import { View, ViewStyle } from 'react-native'
import { Card, CardProps, Icon, Text } from '@ui-kitten/components'
import { Stock } from 'types/general/entities'
import { styles } from './StockItem.style'
import theme from "@theme/theme.json"
import { StockUiState } from 'types/general/ui'

interface StockItemProps extends CardProps {
  stock: Stock,
  style?: ViewStyle
}

interface StockItemState {
  stockStatus: StockUiState
}

class StockItem extends React.Component<StockItemProps, StockItemState> {


  constructor(props: StockItemProps) {
    super(props)
    this.state = { stockStatus: { status: "basic", icon: "code", iconColor: "" } }
    this.getStockVolumeStatus = this.getStockVolumeStatus.bind(this)
  }

  componentDidUpdate(prevProps: Readonly<StockItemProps>, prevState: Readonly<{}>, snapshot?: any): void {
    this.getStockVolumeStatus(prevProps)
  }


  getStockVolumeStatus(prevProps: Readonly<StockItemProps>) {

    let stockStatus: StockUiState = { status: "basic", icon: "code", iconColor: "" }

    if (prevProps.stock.lastPrice !== this.props.stock.lastPrice) {
      if (prevProps.stock.lastPrice < this.props.stock.lastPrice) {
        stockStatus = {
          status: "danger",
          icon: "arrow-down",
          iconColor: theme["color-danger-400"]
        }
      }

      if (prevProps.stock.lastPrice > this.props.stock.lastPrice) {
        stockStatus = { status: "success", icon: "arrow-up", iconColor: theme["color-success-400"] }
      }


      this.setState({ stockStatus });
    }


  }


  render() {
    const { stock, style } = this.props
    const { stockStatus } = this.state
    return (
      <Card style={[styles.item, style]} {...this.props}>
        <View style={styles.priceRow}>
          <Text category='s1'>{stock.symbol}</Text>
          <Text category='s2' status={stockStatus.status}>$ {stock.lastPrice}</Text>
        </View>
        <View style={styles.marginalChangeContainer}>
          <Icon
            style={styles.stockVolumeIcon}
            name={stockStatus.icon}
            fill={stockStatus.iconColor} />
          <Text
            category='h5'
            status={stockStatus.status}>
            {(stock.volume * 100).toFixed(2)}%
          </Text>
        </View>
      </Card>
    )
  }
}



export default StockItem