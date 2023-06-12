import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

type Props = {
  navigation: any;
};

const Screenf = (props: Props) => {
  const arry = [
    {
      id: 1,
      name: 'one',
    },
    {
      id: 2,
      name: 'second',
    },
    {
      id: 3,
      name: 'third',
    },
  ];
  const [listItems, setListItems] = useState(arry);
  const [data, setData] = useState('');
  const [display, setdisplay] = useState(false);
  const cleardata = () => {
    setdisplay(false);
    setData('');
  };
  return (
    <View>
      <Text>hello</Text>
      <TextInput
        defaultValue="name"
        onChangeText={text => setData(text)}
        value={data}
      />
      <Button title="click" onPress={() => setdisplay(true)} />
      <Button title="clear data" onPress={() => cleardata()} />
      {display ? <Text>{data}</Text> : null}
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Screen4', {name: data})}>
        <Text>home screen 4</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screenf;

const styles = StyleSheet.create({});
