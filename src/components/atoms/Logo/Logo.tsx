import React from 'react'
import { Image, ImageStyle } from 'react-native'
import { Images } from '@res/img'
import { styles } from './Logo.style'

interface LogoProps {
  style?: ImageStyle
}

const Logo = ({ style }: LogoProps) => {
  return (
    <Image source={Images.Logo} style={[styles.logo, style]} />
  )
}

export default Logo