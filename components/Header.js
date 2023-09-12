import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInputComponent,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';

const Header = () => {
  return (
    <SafeAreaView
      style={{
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 8,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <AntDesign
          name="contacts"
          size={40}
          style={{color: 'black'}}></AntDesign>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Contacts
        </Text>
        <TouchableOpacity>
          <AntDesign name="bars" size={25} style={{color: 'black'}}></AntDesign>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
