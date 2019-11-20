import React,{Component} from 'react';
import {View,SafeAreaView,Text} from 'react-native';
import AppNavigator1 from './../navigation/notificationTopNavigation';
import {createAppContainer} from 'react-navigation';

const AppIndex = createAppContainer(AppNavigator1);

export default class AddBasic extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                <View>
                        <Text style={{fontSize:30,textAlign:"center"}}>{"Activity"}</Text>
                </View>
                <View style={{flex:1}}>
                    <AppIndex/>
                </View>
            </SafeAreaView>
        );
    }
}