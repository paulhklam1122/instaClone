import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'native-base';

export default class AddMedia extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-add-circle' style={{color: tintColor}} />
        )
    }
  render() {
    return (
      <View>
        <Text> AddMedia </Text>
      </View>
    )
  }
}