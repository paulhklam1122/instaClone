import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, FlatList } from 'react-native';
import { Icon, Header, Left, Right, Body, Container, Content, Thumbnail, Card, CardItem, Button} from 'native-base';
const imageUrl = 'http://profilepics.xyz/wp-content/uploads/2018/04/Profile-pic-9.jpg'
 const UserData = [
   {name: "Ali", image: imageUrl},
   {name: "Ali2", image: imageUrl},
   {name: "Ali3", image: imageUrl},
   {name: "Ali4", image: imageUrl},
   {name: "Ali5", image: imageUrl},
   {name: "Ali6", image: imageUrl},
   {name: "Ali7", image: imageUrl},
 ]
class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name='ios-home-outline' style={{color: tintColor}} />
  }
 renderItem = ({item}) => {
   return (
     <View style={{width: 60, justifyContent:'center', alignItems: 'center', marginRight: 10}}>
        <Thumbnail source={{uri: item.image}} style={{borderWidth: 3, borderColor: 'pink'}}/>
        <Text style={{marginTop: 5, fontSize: 16}}>{item.name}</Text>
      </View>
   )
 }

 keyExtractor= (item, index) => item.name
  render() {
    
    return (
      <Container>
        <Header>
          <Left><Icon name="ios-camera-outline" style={{paddingLeft: 10}} /></Left>
          <Body><Text>Instagram</Text></Body>
          <Right><Icon name="ios-send-outline" style={{paddingRight: 10}} /></Right>
        </Header>
        <Content>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarTextContainer}>
              <Text style={{fontWeight: 'bold', fontSize: 18 }}>Stories</Text>
              <View style={styles.iconContainer}>
                <Icon name="md-play" style={{color: 'black', fontSize: 16, marginRight: 5}}/>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Watch All</Text>
              </View>
            </View>
            <View style={styles.avatarScroller}>
              <FlatList
                data={UserData}
                keyExtractor={this.keyExtractor}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={this.renderItem}
              />
            </View>
          </View>
          <View>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: imageUrl}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: imageUrl}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: imageUrl}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: imageUrl}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: imageUrl}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: imageUrl}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          </View>
        </Content>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  avatarContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  avatarScroller: {
    flex: 3
  },
  avatarTextContainer: {
    paddingTop: 5,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  iconContainer: {
    flexDirection: 'row'
  }
})

export default Home
