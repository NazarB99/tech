import React, { Component } from 'react';
import store from '../store/store';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Header } from '../common/Header';
import LibraryList from './LibraryList';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex:1}}>
                    <Header headerText="Tech Stack" />
                    <LibraryList/>
                </View>
            </Provider>
        )
    }
}


export default App;