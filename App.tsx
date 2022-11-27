import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './src/navigation/tabNavigator';
import {Dark} from './src/styles/navigationBar';
import {NativeBaseProvider} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={Dark}>
        <TabNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
