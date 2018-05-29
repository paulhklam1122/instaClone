import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import PropTypes from 'prop-types'
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base'
import AddMedia from './Addmedia';
import Profile from './Profile';
import Likes from './Likes';
import Home from './Home';
import Search from './Search';

const TabNavigator = createBottomTabNavigator({
    Home: {screen: Home},
    Search: {screen: Search},
    AddMedia: {screen: AddMedia},
    Likes: {screen: Likes},
    Profile: {screen: Profile},
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                }
            })
        },
    },
    tabBarOptions: {
        showLabel: false,
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        tabBarIcon: true,
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



export default MainScreen
