import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const Headerbar = (props: Props) => {
  return (
    <View>
      <Button onPress={() => goBack()} title="Go back from ProfileScreen" />
    </View>
  );
};

export default Headerbar;

const styles = StyleSheet.create({});
