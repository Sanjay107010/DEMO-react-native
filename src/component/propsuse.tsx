import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  name: string;
};

const Propsuse = (props: Props) => {
  return (
    <View>
      <Text>hi i am {props.name}</Text>
    </View>
  );
};

export default Propsuse;

const styles = StyleSheet.create({});
