
import React from 'react';
import {
  View,
} from 'react-native';
import {
  Input
} from 'react-native-elements';

import Post from './sections/Post'



class App extends React.Component {

  state = {
    feed: []
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>

        <View style={{
          flex: 1, justifyContent: "center", alignItems: "center",
          padding: 15, backgroundColor: "#ffffff"
        }}>

          {this.state.feed}
        </View>

        <View>
          <Input
            placeholder='Enter a message'
            placeholderTextColor='black'
          //backgroundColor='#00cccc'
          //onChangeText={text => this.setState({ email: text })}
          />
        </View>
      </View>
    );
  }
};

export default App;
