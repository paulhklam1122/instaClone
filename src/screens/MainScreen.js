import React, { Component } from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AddMedia from './Addmedia';
import Profile from './Profile';
import Likes from './Likes';
import Home from './Home';
import Search from './Search';

const TabNavigator = createAppContainer(createBottomTabNavigator({
    Home: Home,
    Search: Search,
    AddMedia: AddMedia,
    Likes: Likes,
    Profile: Profile,
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
}))

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
