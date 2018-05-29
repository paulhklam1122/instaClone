import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

class AddMedia extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name='ios-add-circle-outline' style={{color: tintColor}} />
  }
  render() {
    return (
      <View>
        <Text> Add Media </Text>
      </View>
    )
  }
}

export default AddMedia