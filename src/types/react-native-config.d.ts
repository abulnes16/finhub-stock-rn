declare module 'react-native-config' {

    export interface NativeConfig {
        AUTH0_DOMAIN: string
        AUTH0_CLIENT_ID: string
        FINHUB_API_SECRET: string
        FINHUB_WEBSOCKET_SECRET: string
        
    }

    export const Config: NativeConfig
    export default Config

}