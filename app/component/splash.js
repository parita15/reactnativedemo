import React,{Component} from 'react';
import {View, Image, AsyncStorage} from 'react-native';

export default class Splash extends Component{
    constructor(props){
        super(props)
        this.state = {
            loggedin:true}
    }

    componentWillMount(): void {
        AsyncStorage.getItem('login').then((value) => {
            let username = JSON.parse(value);
            debugger
            console.log(username)
            if(username){
                if(username.username){
                    debugger
                    this.props.navigation.navigate('Main');
                }
            }
            else
            {
                debugger
                this.props.navigation.navigate('Login');
            }
        });

    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'red'}}>
                <Image source={{uri:'appicon'}} style={{height:'100%',width:'100%'}} resizeMode={'cover'} />
            </View>
        )
    }
}