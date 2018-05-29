import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

export default class Search extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-search' style={{color: tintColor}} />
        )
    }
  render() {
    return (
      <View>
        <Text> Search </Text>
      </View>
    )
  }
}