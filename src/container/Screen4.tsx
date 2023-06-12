import {
  Alert,
  Button,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const User = [
  {
    id: 1,
    name: 'sanjay',
  },
  {
    id: 2,
    name: 'amit',
  },
  {
    id: 3,
    name: 'rohit',
  },
  {
    id: 4,
    name: 'rahul',
  },
];

type Props = {
  navigation: any;
  name: string;
  // namevalue: string;
  route: any;
};

const Screen4 = (props: Props) => {
  const {navigation, route} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([{namevalue: ''}]);
  const [namevalue, setnamevalue] = useState('');
  const [display, setdisplay] = useState(false);
  const cleardata = () => {
    //setdisplay(false);
    setnamevalue('');
  };
  const cleardataflatlist = () => {
    // setdisplay(false);
    //setData('');
  };
  const editData = (item: any, editInd: number) => {
    // console.log('edit data', editInd, item);
    setdisplay(true);
    setnamevalue(item.namevalue);
    var editData = [...data];
    var newDataedit = editData.filter((item, index) => index != editInd);
    console.log('edit data new id', newDataedit);
    setData(newDataedit);
  };

  const onDeletePress = (item: any, delInd: number) => {
    var delData = [...data];
    var newData = delData.filter((item, index) => index != delInd);
    //console.log('delete data ', newData);
    setData(newData);
  };
  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modelstyle}>
          <View style={styles.modalView}>
            <Text style={{color: 'black', fontSize: 20}}>
              hello model is open
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.button}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.model}>
          <Text style={styles.button}>show Model</Text>
        </View>
      </Pressable>
      <FlatList data={User} renderItem={({item}) => <Text>{item.name}</Text>} />
      <TextInput
        defaultValue="insert name"
        style={styles.textstyle}
        onChangeText={text => setnamevalue(text)}
        value={namevalue}
      />

      {display == false ? (
        <TouchableOpacity
          onPress={() => {
            if (namevalue)
              setData([...data, {namevalue: namevalue}]), cleardata();
            // console.log('hi');
          }}>
          <View>
            <Text style={styles.button}>Add me</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (namevalue)
              setData([...data, {namevalue: namevalue}]), cleardata();
            // console.log('hi');
            setdisplay(false);
          }}>
          <View>
            <Text style={styles.button}>Edit me</Text>
          </View>
        </TouchableOpacity>
      )}

      <FlatList
        //  keyExtractor={(item) => item}
        data={data}
        renderItem={({item, index}) => (
          <View>
            <TouchableOpacity onPress={() => onDeletePress(item, index)}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.namevalue}</Text>
                <Text>Delete</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => editData(item, index)}>
              <View>
                <Text>Edit</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title={'remove me'} onPress={() => cleardataflatlist()} />
      <View>
        <Text>{route.params?.name}</Text>
      </View>
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  model: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  modalView: {
    margin: 20,
    // backgroundColor: 'white',
    backgroundcolor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,

    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  button: {
    borderColor: 'Black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    //  shadowColor: 'black',
    margin: 20,
    //elevation: 5,
    textAlign: 'center',
    backgroundColor: 'gery',
    color: 'black',
    fontSize: 20,
  },
  modelstyle: {
    marginTop: 110,
    padding: 20,
    // backgroundColor: 'transparent',
  },
  textstyle: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    // borderStartColor: 'red',
  },
});
