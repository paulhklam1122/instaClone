import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Search from './Search';
import AddMedia from './AddMedia';
import Likes from './Likes';
import Profile from './Profiles'

const TabNavigator = createBottomTabNavigator({
    Home: { screen: Home },
    Search: { screen: Search },
    AddMedia: { screen: AddMedia },
    Likes: { screen: Likes},
    Profile: { screen: Profile}
},{
    initialRouteName: 'Profile',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: 'black',
        inActiveTintColor: 'grey',
        showLabel: false,
        showIcon: true,
    }  
})

class MainScreen extends Component {
    static navigationOptions = {
      header: null,
    }
  render() {
    return (
      <TabNavigator />
    )
  }
}

export default MainScreen;