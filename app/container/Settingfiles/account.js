import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../helper/responsivescreen';
import Constant from '../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppTouchableOpacity} from '../../commom/AppTouchableOpacity';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default class AccountBasic extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {viewContainer,  exStyle,text,logoutAddacContent,textLogin} = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={viewContainer}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="left" size={25} style={{marginLeft: 5}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: wp('100%')}}>
                        <Text style={text}>
                            {'Account'}
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{height:hp('100%')}}>
                        <View >
                            <AppTouchableOpacity
                                title={'Saved'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View >
                            <AppTouchableOpacity
                                title={'Close Friends'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View >
                            <AppTouchableOpacity
                                title={'Language'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View >
                            <AppTouchableOpacity
                                title={'Contacts Syncing'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View>
                            <AppTouchableOpacity
                                title={'Linked Accounts'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View>
                            <AppTouchableOpacity
                                title={'Cellular Data Use'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View>
                            <AppTouchableOpacity
                                title={'Original Photos'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View >
                            <AppTouchableOpacity
                                title={'Request Verification'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View>
                            <AppTouchableOpacity
                                title={'Post Youve Liked'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View >
                            <AppTouchableOpacity
                                title={'Branded Content Tools'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View>
                            <TouchableOpacity style={logoutAddacContent}>
                                <Text style={[textLogin,{color:Constant.color.twitter}]}>{'Switch to Professional Account'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    exStyle:{
        height:hp('7%'),
        borderBottomColor: 'transparent',
        marginLeft: 5
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
        marginLeft:10,
       // marginTop:5,
    },
    logoutAddacContent:{
        height:hp('6%'),
        marginLeft: 20,
        justifyContent:'center'
    },
    textLogin:{
        fontSize: wp('5%')
    },
})