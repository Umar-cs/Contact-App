import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contact from './Contact';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Add = () => {
  const [newName, setName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [text, onChangeText] = useState('');
  const [storeData, setStoreData] = useState([]);
  const [showForm, updateFormState] = useState(false);
  const [allContacts, allcontactsData] = useState([]);
  useEffect(() => {
    getData();
  }, [getData]);

  const getData = useCallback(async () => {
    AsyncStorage.getItem('@contacts')
      .then(data => {
        setStoreData(JSON.parse(data)).then(()=>{
          allcontactsData([...JSON.parse(data)])
        });
      })
      .catch(e => {});
  }, [storeData, setStoreData]);

  const addItemtoList = useCallback(() => {
    const newContact = {name: newName, phone: newNumber};
    const updatedContacts = [...storeData, newContact];
    setStoreData(updatedContacts);
    AsyncStorage.setItem('@contacts', JSON.stringify(updatedContacts))
      .then(() => {
        setName('');
        setNumber('');
        updateFormState(false);
      })
      .catch(() => {});
  }, [newName, newNumber]);

  const searchContact = useCallback(
    value => {
      if (value) {
        const newList = allContacts.filter(x => x.name.includes(value));
        setStoreData(newList);
      } else {
        setStoreData(allContacts);
      }
    },
    [allContacts],
  );
  const deleteContact = useCallback(async names => {
    const index = storeData.findIndex(x => x.name === names);
    const splc = storeData.splice(index, 1);
    const newData = storeData.filter(a => a.name != a.names);
    setStoreData(splc);
    await AsyncStorage.setItem('@contacts', JSON.stringify(newData));
    getData();
  });
  return (
    <View>
      <View>
        <View style={styles.input_view}>
          <TextInput
            style={styles.search_input}
            onChangeText={value => {
              onChangeText(value);
              searchContact(value);
            }}
            value={text}
            placeholder="Search for contact"
          />
          <TouchableOpacity style={{marginRight: 20}}>
            <AntDesign
              name="search1"
              size={30}
              style={{color: 'black'}}></AntDesign>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          height: 80,
          width: 200,
          paddingLeft: 10,
        }}
        onPress={() => updateFormState(true)}>
        <AntDesign
          name="adduser"
          size={35}
          style={{color: 'black'}}></AntDesign>
        <Text>Add New Contact</Text>
      </TouchableOpacity>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={showForm}
        onRequestClose={() => {
          updateFormState(!showForm);
        }}>
        <View style={styles.form}>
          <TextInput
            placeholder="Enter Name"
            value={newName}
            onChangeText={value => setName(value)}
          />
          <TextInput
            placeholder="Enter Number"
            value={newNumber}
            keyboardType={'number-pad'}
            onChangeText={value => setNumber(value)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#c3c7c0',
              justifyContent: 'center',
              height: 50,
              width: 100,
              borderRadius: 10,
            }}
            onPress={() => addItemtoList()}>
            <Text style={{textAlign: 'center'}}>Save Contact</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <FlatList
        data={storeData}
        renderItem={({item, index}) => {
          return (
            <Contact key={index} data={item} deleteContact={deleteContact} />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  search_input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 270,
    borderRadius: 20,
    color: 'black',
    paddingLeft: 10,
  },
  form: {
    flexGrow: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
    height: 350,
    width: 270,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: 'white',
    marginHorizontal: 40,
    marginVertical: '50%',
  },
});
export default Add;
