import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  name: string;
};

const Usestate = (props: Props) => {
  return (
    <View>
      <Text>hello my name is {props.name}</Text>
    </View>
  );
};

export default Usestate;

const styles = StyleSheet.create({});
