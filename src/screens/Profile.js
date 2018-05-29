import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'native-base';

class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name='person' style={{color: tintColor}} />
  }
  render() {
    return (
      <View>
        <Text> Profile </Text>
      </View>
    )
  }
}

export default Profile