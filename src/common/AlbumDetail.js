import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {
  constructor(props){
      super(props);
  }

  render() {
    const {title, artist, thumbnail_image, image, url} = this.props.album;
    const {headerImage, headerContainerStyle, thumbnailContainer, headerTitle, coverImage} = style;
    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainer}>
              <Image style={headerImage} source={{uri: thumbnail_image}}/>
          </View>
          <View style={headerContainerStyle}>
            <Text style={headerTitle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
            <Image style={coverImage} source={{uri:image}} />
        </CardSection>
        <CardSection>
            <Button onPress={() => Linking.openURL(url)}>
              Buy now
            </Button>
        </CardSection>
      </Card>
    )
  }
}

const style = {
    thumbnailContainer:{
      justifyContent:'center',
      alignItems:'center',
      marginLeft:10,
      marginRight:10
    },
    headerTitle:{
      fontSize:18
    },
    coverImage:{
      height:300,
      width:null,
      flex:1
    },
    headerImage:{
      height:50,
      width:50
    },
    headerContainerStyle:{
      flexDirection:'column',
      justifyContent:'space-around'
    }
}

export default AlbumDetail;