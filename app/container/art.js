import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class AddBasic extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{flex:1,backgroundColor:'lightblue',justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>{"art page navigation"}</Text>
            </View>
        );
    }
}