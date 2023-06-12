import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import fonts from '../constant/fonts';
type Props = {
  navigation: any;
  name?: string;
  route: any;
};

const HomeScreen = (props: Props) => {
  const {navigation, route} = props;
  console.log('propsss===>', props);
  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            height: 48,
            backgroundColor: 'red',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Icons name="menuunfold" size={35} />
          </TouchableOpacity>
          <Text style={{fontFamily: fonts.RobotoBlackItalic, marginLeft: 15}}>
            Hello Home
          </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('screen1')}>
          <View>
            <Text>home 1</Text>
            <Text>{route.params?.name}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('screen3')}>
          <View style={{backgroundColor: 'red'}}>
            <Text style={{backgroundColor: 'green'}}>screen3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Screen4')}>
          <View>
            <Text>screen4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Screenf')}>
          <View>
            <Text>screen5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Screentask')}>
          <View>
            <Text>screentask</Text>
          </View>
        </TouchableOpacity>
        <Icons name={'home'} size={50} color={'red'}>
          {''}
        </Icons>
        <Icons name={'delete'} size={50} color={'black'}>
          {''}
        </Icons>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
