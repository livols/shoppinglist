import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './pages/home';
import {Recipe} from './pages/recipe';
import {Settings} from './pages/settings';
import {Notification} from './pages/notification';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Recipe" component={Recipe} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
