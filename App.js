import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import BottomNavigator from './src/components/BottomNavigator';
import MyMap from './src/components/mymap';
import { Provider } from 'react-redux';
import configureStore from './reduxStore/store'

// Initialize the store
const store = configureStore();


const App = () => {
  
  
  return (
    <Provider store={store}>
      <SafeAreaView style={Style.container}>
        <MyMap/>
        <BottomNavigator/>
      </SafeAreaView>
    </Provider>
  );
};

const Style = StyleSheet.create({
  container:{
      flex:1,
      width:'100%',
      height:'100%',
      justifyContent: 'flex-end',
      backgroundColor: 'white'
  }
}) 


export default App;
