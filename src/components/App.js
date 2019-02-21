import React, { Component } from 'react';
import store from '../store/store';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import {Header} from '../common/Header';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View>
                    <Header headerText="Tech Stack" />
                </View>
            </Provider>
        )
    }
}


export default App;