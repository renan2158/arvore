import 'react-native-gesture-handler';
import React from 'react';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import { AppLoading } from 'expo';

import Routes from './src/routes';

function App() {

  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Routes />
  );
}

export default App;