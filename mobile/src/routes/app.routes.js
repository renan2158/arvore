import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Header from '../components/Header';
import Home from '../pages/home';
import Hanking from '../pages/hanking';

const Stack = createStackNavigator();

function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />,
          headerShown: true,
          headerTransparent: false,
          animationEnabled: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hanking" component={Hanking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;