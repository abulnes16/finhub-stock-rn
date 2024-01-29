import React from 'react'
import {
  View,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
  Image
} from 'react-native'
import { Button, Text } from '@ui-kitten/components'
import { styles } from './ResultState.style'

interface ResultStateProps {
  image: ImageSourcePropType
  title: string
  subtitle?: string
  style?: ViewStyle
  imageStyle?: ImageStyle
  onPrimaryAction?: () => void
  primaryActionText?: string
}

const ResultState = ({
  image,
  title,
  subtitle,
  style,
  imageStyle,
  onPrimaryAction,
  primaryActionText,
}: ResultStateProps) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={[styles.image, imageStyle]} source={image} />
      <Text style={styles.centered} category='h5'>{title}</Text>
      {subtitle &&
        <Text style={[styles.subtitle, styles.centered]}>
          {subtitle}
        </Text>
      }
      {
        onPrimaryAction && primaryActionText && (
          <Button style={styles.actionButton} onPress={onPrimaryAction}>
            {primaryActionText}
          </Button>
        )
      }
    </View>
  )
}

export default ResultState