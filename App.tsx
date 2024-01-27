
import React from 'react';
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components"
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from "@eva-design/eva"
import { NavigationContainer } from '@react-navigation/native';
import { Auth0Provider } from "react-native-auth0"
import Config from 'react-native-config';
import Toast from "react-native-toast-message";

import { MainStackNavigator } from '@navigation';
import theme from '@theme/theme.json'
import { Provider } from 'react-redux';
import { store } from "@store/store"



const App = () => {

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <ApplicationProvider  {...eva} theme={{ ...eva.light, ...theme }}>
          <Auth0Provider domain={Config.AUTH0_DOMAIN} clientId={Config.AUTH0_CLIENT_ID}>
            <NavigationContainer>
              <MainStackNavigator />
            </NavigationContainer>
          </Auth0Provider>
        </ApplicationProvider>
      </Provider>
      <Toast />
    </>

  );
}



export default App;
