import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Screentask from '../container/Screentask';
import Screen from '../container/screen';
import Icons from 'react-native-vector-icons/AntDesign';
import Screen1 from '../container/screen1';
import screen3 from '../container/screen3';
import Screenf from '../container/Screenf';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
const Tab = createBottomTabNavigator();

type Props = {};

const TabNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
          // headerShown: true,
        }}>
        <Tab.Screen
          name="stack"
          component={StackNavigation}
          options={{
            tabBarIcon: ({}) => {
              return <Icons name="home" size={30}></Icons>;
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Screentask}
          options={{
            tabBarIcon: ({}) => {
              return <Icons name="setting" size={30}></Icons>;
            },
          }}
        />
        <Tab.Screen
          name="Screenf"
          component={Screenf}
          options={{
            tabBarIcon: ({}) => {
              return <Icons name="profile" size={30}></Icons>;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
