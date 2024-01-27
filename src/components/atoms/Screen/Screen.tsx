import React, { PropsWithChildren } from 'react'
import { View, Text, SafeAreaView, ViewStyle } from 'react-native'
import { styles } from "./Screen.style"
import { Layout } from '@ui-kitten/components'

interface ScreenProps {
    style?: ViewStyle
    containerStyle?: ViewStyle
}

const Screen = ({ children, style, containerStyle }: PropsWithChildren<ScreenProps>) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <Layout style={[styles.screen, containerStyle]}>
                {children}
            </Layout>
        </SafeAreaView>
    )
}

export default Screen