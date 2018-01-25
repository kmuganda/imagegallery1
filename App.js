import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Blankets from './pages/blankets';
import Header from './components/header';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Blankets />
      </View>
    );
  }
}
