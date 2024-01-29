import React from 'react'
import {
  View,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
  Image
} from 'react-native'
import { Text } from '@ui-kitten/components'
import { styles } from './EmptyState.style'

interface EmptyStateProps {
  image: ImageSourcePropType
  title: string
  subtitle?: string
  style?: ViewStyle
  imageStyle?: ImageStyle
}

const EmptyState = ({ image, title, subtitle, style, imageStyle }: EmptyStateProps) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={[styles.image, imageStyle]} source={image} />
      <Text style={styles.centered} category='h5'>{title}</Text>
      {subtitle && <Text style={[styles.subtitle, styles.centered]}>{subtitle}</Text>}
    </View>
  )
}

export default EmptyState