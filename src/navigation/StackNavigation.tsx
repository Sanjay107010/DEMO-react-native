import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Screen1 from '../container/screen1';
import Screen3 from '../container/screen3';
import Screen4 from '../container/Screen4';
import Screenf from '../container/Screenf';
import Screentask from '../container/Screentask';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import Drawernavigation from './drawernavigation';
import HomeScreen from '../container/screen';
const Stack = createNativeStackNavigator();

type Props = {};

const StackNavigation = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName="Screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Screen"
        component={Drawernavigation}
        //options={{title: 'Welcome'}}
      />
      <Stack.Screen name="screen1" component={Screen1} />
      <Stack.Screen name="screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
      <Stack.Screen name="Screenf" component={Screenf} />
      <Stack.Screen name="Screentask" component={Screentask} />
      {/* <Stack.Screen name="slider" component={slider} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
