import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '@screens/authentication';
import { AuthenticationParams } from 'types/navigation';

const AuthStack = createNativeStackNavigator<AuthenticationParams>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name='WelcomeScreen' component={WelcomeScreen} />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator