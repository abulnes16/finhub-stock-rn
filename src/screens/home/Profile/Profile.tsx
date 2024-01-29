import React from 'react'
import { Logo, Screen } from '@components/atoms'
import strings from '@localization'
import { styles } from './Profile.style'
import { Button } from '@ui-kitten/components'
import { useAuth0 } from 'react-native-auth0'
import { useAppDispatch } from '@hooks/useStore'
import { setAccessToken } from '@store/slices/authentication/slice'
import Toast from 'react-native-toast-message'

const Profile = () => {

  const { clearSession } = useAuth0();
  const dispatch = useAppDispatch();
  const onLogout = async () => {
    try {
      await clearSession();
      dispatch(setAccessToken(""))
    } catch (error) {
      Toast.show({
        type: "error",
        text1: strings.profile.logoutError,
        text2: strings.profile.logoutErrorDescription
      })
    }
  }


  return (
    <Screen containerStyle={styles.screen}>
      <Logo />
      <Button
        onPress={onLogout}
        style={styles.logoutButton}>
        {strings.profile.logout}
      </Button>
    </Screen>
  )
}

export default Profile