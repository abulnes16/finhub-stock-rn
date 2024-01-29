import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Button, Card, Icon, Text, useTheme } from '@ui-kitten/components'
import { styles } from './AlertItem.style'
import strings from '@localization'

interface AlertItemProps {
  name: string
  price: number
  onRemove: () => void
}

const AlertItem = ({ name, price, onRemove }: AlertItemProps) => {

  const theme = useTheme()

  return (
    <Card >
      <View style={styles.item}>
        <View>

          <Text category='s1'>{name}</Text>
          <View style={styles.row}>
            <Text>{strings.alerts.price}: </Text>
            <Text category='s2'>${price}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onRemove} >
          <View style={[styles.removeButton, { backgroundColor: theme["color-danger-400"] }]}>
            <Icon name='close' fill={"white"} />
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  )
}

export default AlertItem