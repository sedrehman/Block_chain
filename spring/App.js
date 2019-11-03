
import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  Text
} from 'react-native';
import {
  Input
} from 'react-native-elements';
import { LinearGradient } from 'react-native-linear-gradient'
import Button from './sections/Button'


import Post from './sections/Post'
//import Post2 from './sections/Post2'



class App extends React.Component {

  state = {
    feed: [
      {
        txt: "Text",
        vid: "Video",
        img: "Image"
      },
      {
        vid: "Video",
        img: "Image"
      },
      {
        txt: "Text",
        vid: "Video",
        img: "Image"
      }
    ]

  }
  constructor(props) {
    super(props);
  }

  addToFeed(p) {
    this.state.feed.push(p);

  }
  render() {
    return (





      <View style={{
        padding: 15, backgroundColor: "#ffffff", justifyContent: 'space-between', flex: 1
      }}>



          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}
              keyboardDismissMode='on-drag'>
              {this.state.feed.map(post => {
                return <Post txt={post.txt} img={post.img} vid={post.vid} />
              })}


          </ScrollView>
        </SafeAreaView>

        <View style={{
            flexDirection: 'row', justifyContent: 'center', width: window.width, margin: 5, padding: 2,
            borderWidth: 4, borderColor: '#888', borderRadius: 10, backgroundColor: '#fff'
          }}>

            <View style={{ flex: 12 }}>
              <TextInput
                onChangeText={(textEntry) => { this.setState({ searchText: textEntry }) }}
                style={{ backgroundColor: 'transparent' }}
                onSubmitEditing={() => { this.onSubmit(this.state.searchText) }}
              />
            </View>

            <View>
              <Button onPress={() => this.onSubmit(this.state.searchText)}>
                <Image source={require('./images/send.png')} style={{ position: 'absolute', left: 0, bottom: 0, width: 25, height: 25 }} />
              </Button>
            </View>
          </View>


      </View>


    );
  }
};

export default App;
