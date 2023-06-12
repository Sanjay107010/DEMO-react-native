import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen3 from '../container/screen3';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../container/screen';

const Drawer = createDrawerNavigator();

type Props = {};

const Drawernavigation = (props: Props) => {
  console.log('Props of drawer', props);

  return (
    // <Drawer.Navigator initialRouteName="HomeScreen">
    //   <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    //   <Drawer.Screen name="Screen3" component={Screen3} />
    // </Drawer.Navigator>
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Drawernavigation;

const styles = StyleSheet.create({});
