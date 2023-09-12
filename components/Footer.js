import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Footer = () => {
  return (
    <SafeAreaView
      style={{
        borderTopColor: 'lightgrey',
        borderTopWidth: 0.5,
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 8,
        }}>
        <TouchableOpacity>
          <AntDesign
            name="message1"
            size={35}
            style={{color: 'black'}}></AntDesign>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="reload1"
            size={35}
            style={{color: 'black'}}></AntDesign>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="hearto"
            size={35}
            style={{color: 'black'}}></AntDesign>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Footer;
