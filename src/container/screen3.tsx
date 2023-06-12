import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Usestate from '../component/Usestate';

type Props = {
  navigation: any;
  arrname?: [];
  route: any;
};

const Screen3 = (props: Props) => {
  const {navigation, route} = props;
  const [text, settext] = useState('');
  const [show, setshow] = useState(false);
  const showvalue = () => {
    //setshow(!show);
    setshow(true);
  };
  console.log('propssse===>', props);
  return (
    <View>
      <TextInput
        style={styles.StyleInput}
        defaultValue="insert text"
        onChangeText={text => settext(text)}
        value={text}
      />
      <Button title="press" onPress={() => showvalue()} />
      {show == true ? <Usestate name={text}></Usestate> : null}
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home', {arrname: text})}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
      <Text>{route.params?.arrname}</Text>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  StyleInput: {
    height: 50,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
  },
});
