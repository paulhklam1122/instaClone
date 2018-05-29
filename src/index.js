
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen.js';

const AppNavigator = createStackNavigator({
  Main: {screen: MainScreen },
})
class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}
export default App