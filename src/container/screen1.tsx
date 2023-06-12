import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Propsuse from '../component/propsuse';
import fonts from '../constant/fonts';

type Props = {
  navigation: any;
  // arrname?: [];
  // name: string;
};

const Screen1 = (props: Props) => {
  // multiple component use
  const arr = ['A ', 'B ', 'C ', 'D '];
  const MultiCom = () => {
    return (
      <View>
        <Text>hello multiple component</Text>
      </View>
    );
  };
  const name = 'sanjay';
  const [text, settext] = useState('');
  const [ShowText, setShowText] = useState(false);
  const getFullName = (fname: String, lname: String) => {
    return fname + ' ' + lname;
  };

  const showMy = () => {
    setShowText(!ShowText);
  };
  return (
    <View>
      <TextInput
        style={styles.textstyle}
        defaultValue="enter text hear"
        onChangeText={text => settext(text)}
        value={text}
      />

      <Button title="press" onPress={() => showMy()}></Button>
      {ShowText == true ? (
        <View>
          <Text>{text}</Text>
        </View>
      ) : null}
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200}}
      />
      <Text style={styles.fontss}>my name is {name}</Text>
      <Text>full Name is {getFullName('amit', 'patel')}</Text>
      <MultiCom></MultiCom>
      <MultiCom></MultiCom>
      <MultiCom></MultiCom>
      <Propsuse name="sanjay"></Propsuse>
      <Propsuse name="amit"></Propsuse>
      <Propsuse name="rahul"></Propsuse>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('screen3', {arrname: arr})}>
        <Text> Screen 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  textstyle: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    // borderStartColor: 'red',
  },
  fontss: {
    fontFamily: fonts.RobotoBlackItalic,
    fontSize: 25,
    fontWeight: '200',
  },
});
