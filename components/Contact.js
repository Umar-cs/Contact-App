import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Contact = ({data, deleteContact}) => {
  const {name, phone} = data;
  const [showBox, setShowBox] = useState(true);

  const showConfirmDialog = () => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to remove this contact?',
      [
        {
          text: 'Yes',
          onPress: () => {
            deleteContact(name);
            setShowBox(false);
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };

  return (
    <SafeAreaView style={{marginTop: 20}}>
      <View style={{marginHorizontal: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                style={{height: 50, width: 50}}
                source={require('../img/icon.png')}
              />
            </TouchableOpacity>
            <View style={{marginLeft: 10}}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
                {name}
              </Text>
              <Text style={{fontWeight: 'bold'}}>{phone}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image source={require('../img/call.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showConfirmDialog()}>
              <AntDesign name="deleteuser" size={30}></AntDesign>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Contact;
