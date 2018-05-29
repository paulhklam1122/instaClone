import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Icon, Header, Body, Left, Right, Container, Content, Card, CardItem } from 'native-base';

export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}} />
        )
    }
  render() {
    return (
      <Container>
          <Header >
              <Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} /></Left>
              <Body><Text>Instagram</Text></Body>
              <Right><Icon name="ios-camera-outline" style={{ paddingRight: 10 }} /></Right>
          </Header>
        <Content style={{backgroundColor: 'white'}}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatarText}>
                    <View>
                        <Text>Stroies</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name={'md-play'} style={{marginRight: 5, fontSize: 18}}/>
                        <Text>Watch All</Text>
                    </View>
                </View>
                <View></View>
            </View>
         </Content>   
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    avatarContainer: {
        flexDirection: 'column',
        paddingTop: 10,
    },
    avatarText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    }
})