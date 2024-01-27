import React from 'react'
import { ViewStyle } from 'react-native'
import { IconProps, Icon, useTheme } from "@ui-kitten/components"

interface NavigationIcon extends IconProps {
  name: string
  style?: ViewStyle
  focused: boolean;
  color: string;
  size: number;
}

const NavigationIcon = ({
  style,
  focused,
  color,
  size,
  name,
}: NavigationIcon) => {

  const theme = useTheme();

  return (
    <Icon
      name={name}
      style={{ ...style }}
      color={focused ? theme['color-primar-500'] : color}
      width={size}
      height={size}
    />
  )
}

export default NavigationIcon