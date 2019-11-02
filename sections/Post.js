
import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import{
    Video
} from 'react-native-video'



class Post extends React.Component{
    state = {
        isThereText: false,
        isThereImage: false,
        isThereVideo: false,
        txt: null,
        img: null,
        vid: null
    }
    constructor(txt, img, vid){
        super(txt, img, vid);
        if(txt != null){
            this.state.isThereText = true;
            this.state.txt = txt;
        }
        if(img != null){
            this.state.isThereImage = true;
            this.state.img = img;
        }
        if(vid != null){
            this.state.isThereVideo = true;
            this.state.vid = vid;
        }
    }
    toString(){
        if(this.state.isThereText && !this.state.isThereImage && !this.state.isThereVideo ){
            return(
                <View>
                    <Text>{this.state.txt}</Text>
                </View>
            );
        }
        if(this.state.isThereText && this.state.isThereImage && !this.state.isThereVideo){
            return(
                <View>
                    <Text>{this.state.txt}</Text>
                    <Image
                    source = {this.state.img}
                    />
                </View>
            );
        }
        if(this.state.isThereText && !this.state.isThereImage && this.state.isThereVideo){
            return(
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", 
                padding: 15, backgroundColor: "#ffffff" }}>
                    <Text>{this.state.txt}</Text>
                    <Video
                    source = {this.state.vid}
                    />
                </View>
            );
        }
    }
};

export default Post;
