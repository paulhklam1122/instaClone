import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { Icon, Container, Header, Content, Body, Right, Left, Button } from 'native-base'

const { width, height } = Dimensions.get('window')
const imageWidth = width / 3
const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4wddNiyzQRqApTzdLN6ldIe4GY9bz64n46ddqkEjikn2g0bJ',
  'http://joombig.com/demo-extensions1/images/gallery_slider/Swan_large.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvIlhwKtYxx6qMypSMfL6NSR03z2Q8Ua8xNPRW-xQBThtZykT',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jIHhtTAb7XEHU9ycYgAQevSUxGnajegbyAybqE0R97fA8pFKKg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4wddNiyzQRqApTzdLN6ldIe4GY9bz64n46ddqkEjikn2g0bJ',
  'http://joombig.com/demo-extensions1/images/gallery_slider/Swan_large.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvIlhwKtYxx6qMypSMfL6NSR03z2Q8Ua8xNPRW-xQBThtZykT',
  'https://media.giphy.com/media/kEKcOWl8RMLde/giphy.gif',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4wddNiyzQRqApTzdLN6ldIe4GY9bz64n46ddqkEjikn2g0bJ',
  'http://joombig.com/demo-extensions1/images/gallery_slider/Swan_large.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvIlhwKtYxx6qMypSMfL6NSR03z2Q8Ua8xNPRW-xQBThtZykT',
  'https://media.giphy.com/media/kEKcOWl8RMLde/giphy.gif',
]
class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name='person' style={{color: tintColor}} />
  }
  state={
    active: 0,
  }
  handleChangeTab = (index) => {
    this.setState({active: index})
  }

  renderTabContent = () => {
    if (this.state.active === 0 ) {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          { images.map((image, index) => {
            return (
              <View key={index} style={{width: imageWidth, height: imageWidth}}>
                <Image source={{uri: image}} style={{width: undefined, height: undefined, flex: 1}}/>
              </View>
            )})
          }
       </View>
       )}
    }

  render(){
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="ios-person-add-outline"/>
          </Left>
          <Body>
            <Text>Ali Alizada</Text>
          </Body>
          <Right>
            <Icon name="md-timer"/>
          </Right>
        </Header>
        <Content style={{backgroundColor: 'white'}}>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingHorizontal: 10}}>
              <View style={{flex: 1}}>
                <Image style={{height: 75, width: 75, borderRadius: 37.5}}source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPRJJ6hhh9U_HIEsLqKxO5wiVDeW1j63v0EAFzAU02xpxBdcMUAw"}}/>
              </View>
              <View style={{flex: 3, flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Text>334</Text>
                    <Text style={{fontSize: 16, color: 'grey'}}>Post</Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Text>334</Text>
                    <Text style={{fontSize: 16, color: 'grey'}}>followers</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>12000</Text>
                    <Text style={{fontSize: 16, color: 'grey'}}>following</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                  <Button dark bordered style={{flex: 3, justifyContent: 'center', marginRight: 5, height: 30 }}>
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button dark bordered style={{flex: 1, justifyContent: 'center', height: 30, alignItems: 'center'}}>
                    <Icon name='settings' style={{fontSize: 17}} />
                  </Button>
                </View>
              </View>
            </View>
            <View style={{paddingVertical: 15, paddingHorizontal: 15}}>
              <Text style={{fontWeight: 'bold', paddingBottom: 5}}>Ali Alizada</Text>
              <Text>Something about yourself</Text>
              <Text>www.ali-alizada.com</Text>
            </View>
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: 'grey', paddingVertical: 10}}>
                <Button transparent onPress={() => this.handleChangeTab(0)}>
                  <Icon name='ios-apps-outline' style={[this.state.active === 0 ? {}: {color: 'grey'}]}/>
                </Button>
                <Button transparent onPress={() => this.handleChangeTab(1)}>
                  <Icon name='ios-list-outline' style={[this.state.active === 1 ? {}: {color: 'grey'}]} />
                </Button>
                <Button transparent onPress={() => this.handleChangeTab(2)}>
                  <Icon name='ios-people-outline' style={[this.state.active === 2 ? {}: {color: 'grey'}]}/>
                </Button>
                <Button transparent onPress={() => this.handleChangeTab(3)}>
                  <Icon name='ios-bookmark-outline' style={[this.state.active === 3 ? {}: {color: 'grey'}]}/>
                </Button>
              </View>
            </View>
            <View>
              {this.renderTabContent()}
            </View>
          </View>
        </Content>
      </Container>
    ) 
}
}

export default Profile