import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}
const App = () => {

  enableScreens();// just for performance

  const [fontLoaded, setFondLoaded] = useState(false);


  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFondLoaded(true)}
    />
  }

  return (
    <MealsNavigator />
  );
}

export default App;
