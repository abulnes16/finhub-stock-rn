import React from 'react'
import { useAuth0 } from 'react-native-auth0'
import Toast from 'react-native-toast-message'
import { Button, Spinner } from '@ui-kitten/components'
import { Logo, Screen } from '@components/atoms'
import strings from '@localization'
import { useAppDispatch } from '@hooks/useStore'
import { setAccessToken } from '@store/slices/authentication/slice'
import { styles } from './WelcomeScreen.style'


const WelcomeScreen = () => {

  const { authorize, isLoading } = useAuth0();
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
      <Logo />
      {isLoading ? <Spinner /> : <Button
        onPress={onLogin}
        style={styles.loginButton}>
        {strings.welcome.login}
      </Button>}
    </Screen>
  )
}

export default WelcomeScreen