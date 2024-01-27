import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type AuthenticationParams = {
    WelcomeScreen: undefined
}

export type AuthenticationStackParams<T extends keyof AuthenticationParams> =
    NativeStackScreenProps<AuthenticationParams, T>