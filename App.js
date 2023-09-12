import {SafeAreaView, View} from 'react-native';
import Add from './components/Add';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header />
        <Add></Add>
      </View>
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default App;
