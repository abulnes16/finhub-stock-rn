import React from 'react'
import { useAppSelector } from '@hooks/useStore'
import { AuthenticationSelectors } from '@store/slices/authentication/slice'
import HomeBottomTabsNavigator from './home/BottomTabsNavigator'
import AuthStackNavigator from './authentication/AuthStackNavigator'

const MainStackNavigator = () => {

  const accessToken = useAppSelector(AuthenticationSelectors.getAccessToken)

  if (accessToken === "") {
    return (
      <AuthStackNavigator />
    )
  }

  return <HomeBottomTabsNavigator />



}

export default MainStackNavigator