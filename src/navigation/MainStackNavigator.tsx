import React from 'react'
import AuthStackNavigator from './authentication/AuthStackNavigator'
import { useAppSelector } from '@hooks/useStore'
import { AuthenticationSelectors } from '@store/slices/authentication/slice'

const MainStackNavigator = () => {

  const accessToken = useAppSelector(AuthenticationSelectors.getAccessToken)

  if (accessToken === "") {
    return (
      <AuthStackNavigator />
    )
  }

  return <></>



}

export default MainStackNavigator