import React from 'react'
import { Image } from 'react-native'
import { Screen } from '@components/atoms'
import { Images } from '@res/img'
import { styles } from './WelcomeScreen.style'
import { Button } from '@ui-kitten/components'
import strings from '@localization'
import { useAuth0 } from 'react-native-auth0'
import Toast from 'react-native-toast-message'
import { useAppDispatch } from '@hooks/useStore'
import { setAccessToken } from '@store/slices/authentication/slice'


const WelcomeScreen = () => {

  const { authorize } = useAuth0();
  const dispatch = useAppDispatch();

  const onLogin = async () => {
    try {
      const credentials = await authorize();

      if (!credentials) {
        return;
      }

      const { accessToken } = credentials
      dispatch(setAccessToken(accessToken));
    }
    catch (error) {
      Toast.show({ type: "error", text1: strings.welcome.authError })
    }
  }


  return (
    <Screen containerStyle={styles.screen}>
      <Image source={Images.Logo} style={styles.logo} />
      <Button onPress={onLogin} style={styles.loginButton}>{strings.welcome.login}</Button>
    </Screen>
  )
}

export default WelcomeScreen