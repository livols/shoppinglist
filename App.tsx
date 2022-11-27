import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './src/navigation/tabNavigator';
import {Dark} from './src/styles/styles';

export default function App() {
  return (
    <NavigationContainer theme={Dark}>
      <TabNavigator />
    </NavigationContainer>
  );
}
