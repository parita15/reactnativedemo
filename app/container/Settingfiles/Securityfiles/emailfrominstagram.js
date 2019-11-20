import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from './../../../helper/responsivescreen'

import Icon from 'react-native-vector-icons/AntDesign';
import Constant from './../../../helper/themeHelper'
import AppNavigator from './../../../navigation/emailfrominstagramnavigation';
import {createAppContainer} from 'react-navigation';
const AppIndex = createAppContainer(AppNavigator);

export default class PhonenumberBasic extends Component{
    constructor(props){
        super(props)
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
                            {'Emails From Instagram'}
                        </Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <AppIndex/>
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