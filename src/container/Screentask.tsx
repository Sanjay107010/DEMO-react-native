import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import Icons1 from 'react-native-vector-icons/Entypo';

type Props = {};

const Screentask = (props: Props) => {
  const [Name, setName] = useState('');
  const [data, setData] = useState(''); //also usestate([{Name: ''}]);
  const [display, setdisplay] = useState(false);

  const cleardata = () => {
    setName('');
  };
  const onDeletePress = (item: any, delInd: number) => {
    var delData = [...data];
    var newData = delData.filter((item, index) => index != delInd);
    //console.log('delete data ', newData);
    setData(newData);
  };
  const editData = (item: any, editInd: number) => {
    console.log('edit data', editInd);
    setdisplay(true);
    setName(item.Name);
    var editData = [...data];
    var newDataedit = editData.filter((item, index) => index != editInd);
    console.log('edit data new id', newDataedit);
    setData(newDataedit);
    // console.log('edit after data', editInd, item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.text1}>
        <TextInput
          style={styles.textinput}
          defaultValue="insert name"
          onChangeText={text => setName(text)}
          value={Name}
        />
        {display == false ? (
          <TouchableOpacity
            onPress={() => {
              if (Name) setData([...data, {Name: Name}]), cleardata();
              // console.log('hi');
            }}>
            <View style={styles.button}>
              {/* <Text style={{fontSize: 25}}>Add</Text> */}
              <Icons name={'adduser'} size={30} color={'black'}></Icons>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              if (Name) setData([...data, {Name: Name}]), cleardata();
              // console.log('hi');
              setdisplay(false);
            }}>
            <View style={styles.button}>
              {/* <Text style={{fontSize: 25}}>Edit</Text> */}
              <Icons name={'edit'} size={30} color={'black'}></Icons>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        //  keyExtractor={(item) => item}
        data={data}
        renderItem={({item, index}) => (
          <View style={styles.flateliste}>
            <Text style={{fontSize: 24}}>{item.Name}</Text>
            <View style={styles.editdel}>
              <TouchableOpacity onPress={() => editData(item, index)}>
                {/* <Text style={styles.edbutton}>Edit</Text> */}
                <Icons1 name={'edit'} size={30} color={'red'}></Icons1>
              </TouchableOpacity>
              <View style={styles.deleteb}>
                <TouchableOpacity onPress={() => onDeletePress(item, index)}>
                  <Icons name={'delete'} size={30} color={'red'}>
                    {''}
                  </Icons>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Screentask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  text1: {
    // flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
    marginTop: 20,
  },

  textinput: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 35,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 5,
    fontSize: 25,
  },
  button: {
    // borderColor: 'Black',
    // borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    // paddingLeft: 5,
    // paddingRight: 5,
    //  shadowColor: 'black',
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#00b300',
  },
  flateliste: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    // justifyContent: 'center',
    // margin: 10,
    // borderWidth: 1,
    // paddingTop: 20,
    paddingLeft: 10,
    margin: 5,
  },
  editdel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'center',
    // margin: 10,
    // borderWidth: 1,
    // paddingTop: 20,
  },
  deleteb: {
    marginLeft: 10,
  },
  edbutton: {
    fontSize: 25,
    backgroundColor: '#99ff99',
    borderColor: 'red',
    borderRadius: 10,
    padding: 5,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
  },
  delbutton: {
    fontSize: 25,
    backgroundColor: '#ff4d4d',
    borderColor: 'red',
    borderRadius: 10,
    color: 'black',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
