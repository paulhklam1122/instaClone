import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { Icon, Header, Left, Right, Body, Container, Content, Button} from 'native-base';

const {width, height } = Dimensions.get('window')

const images = [
  'https://i.pinimg.com/originals/4f/25/a1/4f25a1d7fcf97d41e725213dae3fea70.jpg',
  'https://www.gettyimages.ca/gi-resources/images/Embed/new/embed2.jpg',
  'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/sdogif.gif',
  'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
  'http://www.thepopularfestivals.com/wp-content/uploads/2017/07/best-friend-images.jpg',
  'https://i.pinimg.com/originals/4f/25/a1/4f25a1d7fcf97d41e725213dae3fea70.jpg',
  'https://www.gettyimages.ca/gi-resources/images/Embed/new/embed2.jpg',
  'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/sdogif.gif',
  'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
  'http://www.thepopularfestivals.com/wp-content/uploads/2017/07/best-friend-images.jpg',
  'https://i.pinimg.com/originals/4f/25/a1/4f25a1d7fcf97d41e725213dae3fea70.jpg',
  'https://www.gettyimages.ca/gi-resources/images/Embed/new/embed2.jpg',
  'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/sdogif.gif',
  'https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg',
  'http://www.thepopularfestivals.com/wp-content/uploads/2017/07/best-friend-images.jpg'
]
const imageSize = width / 3 

class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name='person' style={{color: tintColor}} />
  }

  state = {
    activeIndex: 0
  }
  handleChangeTab = index => {
    this.setState({activeIndex: index})
  }
  renderSection = () => {
    if (this.state.activeIndex === 0 ) {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          { images.map((image, index) => {
            return (
              <View key={index} style={{ width: imageSize, height: imageSize }}>
                <Image  source={{uri: image}} style={{flex: 1, height: undefined, width: undefined}} />
              </View>
            )
          })
          }
        </View>
      )
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Left><Icon name="md-person-add" style={{paddingLeft: 10}} /></Left>
          <Body><Text>Instagram</Text></Body>
          <Right><Icon name="ios-timer-outline" style={{paddingRight: 10}} /></Right>
        </Header>
        <Content style={{backgroundColor: 'white'}}>
          <View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image style={{width: 75, height: 75, borderRadius: 37.5}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0agEBqU1AvcLn9ctI1IGY_88R_JpVwxWLXR16T1-vHGzdQNyT'}} />
              </View>
              <View style={{flex: 3}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', }}>
                    <View style={{alignItems: 'center'}}>
                      <Text>post</Text>
                      <Text style={{fontSize: 10, color: 'grey'}}>20</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={{fontSize: 10, color: 'grey'}}>followers</Text>
                      <Text>40</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={{fontSize: 10, color: 'grey'}}>following</Text>
                      <Text>80</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, }}>
                  <Button bordered dark style={{ flex: 3, justifyContent: 'center', marginRight: 10 }}><Text> Edit Profile</Text></Button>
                  <Button bordered dark  style={{ flex: 1, justifyContent: 'center',marginRight: 5  }}><Icon name='settings'/></Button>
                </View>
              </View>
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
              <Text style={{fontWeight: 'bold'}}>Ali Alizada</Text>
              <Text>Hey some text for the profile</Text>
              <Text>hoom</Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button  transparent onPress={() => this.handleChangeTab(0)} active={this.state.activeIndex === 0}>
                <Icon name='ios-apps-outline' style={[this.state.activeIndex === 0 ? {} : { color: 'grey'}]}/>
              </Button>
              
              <Button transparent onPress={() => this.handleChangeTab(1)} active={this.state.activeIndex === 1}>
                <Icon name='ios-list-outline' style={[this.state.activeIndex === 1 ? {} : { color: 'grey'}]}/>
              </Button>

              <Button transparent onPress={() => this.handleChangeTab(2)} active={this.state.activeIndex === 2}>
                <Icon name='ios-people-outline' style={[this.state.activeIndex === 2 ? {} : { color: 'grey'}]}/>
              </Button>

              <Button transparent onPress={() => this.handleChangeTab(3)} active={this.state.activeIndex === 3}>
                <Icon name='ios-bookmark-outline' style={[this.state.activeIndex === 3 ? {} : { color: 'grey'}]}/>
              </Button>
            </View>
            <View>
              {this.renderSection()}
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default Profile