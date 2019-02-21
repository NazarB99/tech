import React from 'react'
import { View, Text, TextInput } from 'react-native';

const Input = ({label, onChangeText, value, placeholder, secureTextEntry}) => {
    const {labelStyle, containerStyle, inputStyle} = style;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} value={value} style={inputStyle} autoCorrect={false} onChangeText={onChangeText} />   
        </View>
    )

};

const style ={
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    },
    labelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
}

export {Input};