import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Button, Card, Icon, Text, useTheme } from '@ui-kitten/components'
import { styles } from './AlertItem.style'
import strings from '@localization'

interface AlertItemProps {
  name: string
  price: number
  onPress: () => void
  icon: string
  iconColor?: string
  iconBgColor?: string
}

const AlertItem = ({
  name,
  price,
  onPress,
  icon = "close",
  iconColor = "white",
  iconBgColor
}: AlertItemProps) => {

  const theme = useTheme()
  const backgroundColor = iconBgColor ?? theme["color-danger-400"]
  return (
    <Card style={styles.itemContainer} >
      <View style={styles.item}>
        <View>
          <Text category='s1'>{name}</Text>
          <View style={styles.row}>
            <Text>{strings.alerts.price}: </Text>
            <Text category='s2'>${price}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onPress} >
          <View style={[styles.removeButton, { backgroundColor }]}>
            <Icon name={icon} fill={iconColor} />
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  )
}

export default AlertItem