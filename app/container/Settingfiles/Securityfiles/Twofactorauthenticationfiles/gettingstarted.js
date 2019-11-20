import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from './../../../../helper/responsivescreen'

import Icon from 'react-native-vector-icons/AntDesign';
import Constant from './../../../../helper/themeHelper';
import {AppTouchableOpacity} from '../../../../commom/AppTouchableOpacity';

export default class GettingBasic extends Component{
    constructor(props){
        super(props)
        this.state = {
            activityswitchValue:false,
            authenticationswitchValue:false}
    }
    activitySwitch = (value) => {
        this.setState({activityswitchValue: value})
    }
    authenticationSwitch = (value) => {
        this.setState({authenticationswitchValue: value})
    }
    render(){
        const {viewContainer,text,exStyle} = styles;
        return (
            <SafeAreaView style={{flex: 1}}>

                <View style={viewContainer}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="left" size={25}  style={{marginLeft:5}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: wp('80%')}}>
                        <Text style={text}>
                            {'Two-Factor Authentication'}
                        </Text>
                    </View>
                </View>
                <View style={{height:hp('10%'),justifyContent:'center'}}>
                    <Text style={{textAlign:'center',fontSize: wp('6%')}}>
                        {'Choose Your Security Method'}
                    </Text>
                </View>
                <View style={{height:hp('7%')}}>
                    <Text style={{fontSize: wp('4%'),textAlign:'center'}}>
                        {'Choose you want to get the security code when we need to confirm that its you logging in.'}
                    </Text>
                    <TouchableOpacity>
                        <Text style={{textAlign:'center',fontSize: wp('4%'),color:Constant.color.blue}}>
                            {'Learn More'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:hp('5%')}}>
                    <AppTouchableOpacity
                        title={'Two-Factor Authentication'}
                        exStyle={exStyle}
                        exTextstyle={{fontWeight:'700',fontSize: wp('4.5%')}}
                        activeOpacity={0.99}
                    />
                </View>
                <View style={{flexDirection: 'row',height:hp('5%')}}>
                    <AppTouchableOpacity
                        title={'Text Message'}
                        exStyle={exStyle}
                        onPress={()=>this.props.navigation.navigate('Phonenumber')}
                    />

                    <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                        <Switch  onValueChange = {this.activitySwitch}
                                 value = {this.state.activityswitchValue}/>
                    </View>
                </View>
                <View>
                    <Text style={{marginLeft:17,color:Constant.color.lightGray}}>
                        {'We will send a code to number you choose'}
                    </Text>
                </View>
                <View style={{flexDirection: 'row',height:hp('5%')}}>
                    <AppTouchableOpacity
                        title={'Authentication App'}
                        exStyle={exStyle}
                    />

                    <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                        <Switch  onValueChange = {this.authenticationSwitch}
                                 value = {this.state.authenticationswitchValue}/>
                    </View>
                </View>
                <View>
                    <Text style={{marginLeft:17,color:Constant.color.lightGray}}>
                        {'We will check to see if you have one. If you dont,we will recommend one to download'}
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    exStyle:{
        height:hp('7%'),
        borderBottomColor: 'transparent',
        marginLeft: 3,
        width:wp('85%')
    },
    viewContainer:{
        flexDirection: 'row',
        borderWidth:1,
        borderTopColor:'transparent',
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderBottomColor:Constant.color.lightGray,
        height:hp('5%'),
    },
    text:{
        fontSize:wp('5.5%'),
        marginLeft:5,
        // marginTop:5,
    },
})