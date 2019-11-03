
import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import{
    Video
} from 'react-native-video'

const Post = ({ txt = '', img = '', vid = '' }) => {
    // const textNode = txt && <Text>{txt}</Text>
    const textNode2 = txt ? <Text>{txt}</Text> : null
    return (
        <View> 
            {textNode2}
            <Text>{img}</Text>
            {/* <Image
            source = {this.props.img}
            /> */}
            <Text>{vid}</Text>
        </View>
    )
};

export default Post;

