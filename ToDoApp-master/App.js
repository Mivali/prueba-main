import React, {useState} from 'react';
import {View, Text} from 'react-native';
import style from './src/style/style';
import Drawer from './src/components/Drawer';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
}
