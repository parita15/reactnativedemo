import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../helper/responsivescreen';
import Constant from '../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppTouchableOpacity} from '../../commom/AppTouchableOpacity';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class PrivacyBasic extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { viewContainer,text } = styles;
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={viewContainer}>
                    <View >
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                            <Icon name="left" size={25}  style={{marginLeft:5}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:wp('100%')}}>
                        <Text style={text}>
                            {'Privacy'}
                        </Text>
                    </View>
                </View>
                <ScrollView indicatorStyle={'white'}>
                    <View >
                        <View style={{height:hp('35%'),borderBottomColor: Constant.color.lightGray,
                                    borderWidth: 0.5,borderTopColor: 'transparent'}}>
                            <View style={{height:hp('6%'),marginLeft: 20,
                                justifyContent:'center'}}>
                                <Text style={{fontSize: wp('5%'),fontWeight:'bold'}}>{'Interactions'}</Text>
                            </View>
                            <View>
                                    <AppTouchableOpacity
                                        title={'Comments'}
                                        exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                        icon={<EvilIcon name="comment" size={40} style={{marginLeft: 5}} />}
                                        onPress={() => {this.props.navigation.navigate('Comments')}}
                                    />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Tags'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<EvilIcon name="comment" size={40}  style={{marginLeft: 5}}/>}
                                    onPress={() => {this.props.navigation.navigate('Tags')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Story'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<FeatherIcon name="plus-circle" size={40} style={{marginLeft: 5}}/>}
                                    onPress={() => {this.props.navigation.navigate('Story')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Acitity Status'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<FeatherIcon name="user-check" size={40} style={{marginLeft: 5}} />}
                                    onPress={() => {this.props.navigation.navigate('Activitystatus')}}
                                />
                            </View>
                        </View>
                        <View style={{height:hp('100%')}}>
                            <View style={{height:hp('6%'),marginLeft: 23,
                                justifyContent:'center'}}>
                                <Text style={{fontSize: wp('5%'),fontWeight:'bold'}}>{'Connections'}</Text>
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Account Privacy'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<FeatherIcon name="lock" size={40} style={{marginLeft: 5}}/>}
                                    onPress={() => {this.props.navigation.navigate('Accountprivacy')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Restricted Accounts'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<Ionicon name="ios-close-circle-outline" size={40}  style={{marginLeft: 5}}/>}
                                    onPress={() => {this.props.navigation.navigate('Settings')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Blocked Accounts'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<Ionicon name="ios-close-circle-outline" size={40} style={{marginLeft: 5}} />}
                                    onPress={() => {this.props.navigation.navigate('Blockedaccount')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Muted Accounts'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<FeatherIcon name="bell-off" size={35} style={{marginLeft: 5}} />}
                                    onPress={() => {this.props.navigation.navigate('Mutedaccount')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Close Friends'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<MaterialIcon name="format-list-bulleted-square" size={40} style={{marginLeft: 5}} />}
                                    onPress={() => {this.props.navigation.navigate('Closedfriend')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Accounts You Follow'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<FeatherIcon name="users" size={40} style={{marginLeft: 5}}  />}
                                    onPress={() => {this.props.navigation.navigate('Accountyoufollow')}}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    viewContainer:{
        flexDirection: 'row',
        borderWidth:1,
        borderTopColor:'transparent',
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderBottomColor:Constant.color.lightGray,
        height:hp('5%')
    },
    text:{
        fontSize:wp('5.5%'),
        marginLeft:10,
        //marginTop:5,
    },
})