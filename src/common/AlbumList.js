import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetail';

class AlbumList extends Component {
    constructor(props){
        super(props);
        this.state ={
            albums:[]
        }
    }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                this.setState({albums:res.data})
                console.log(this.state.albums);
            })
    }

    renderAllAlbums(){
        return this.state.albums.map((album,index) => ( <AlbumDetails key={index} album={album}></AlbumDetails> ))
    }

    render() {
        return (
            <ScrollView>
                {this.renderAllAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList;