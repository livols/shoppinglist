import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../pages/home';
import {Recipe} from '../pages/recipe';
import {Settings} from '../pages/settings';
import {Notification} from '../pages/notification';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Recipe" component={Recipe} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
}
