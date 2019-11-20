import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../helper/responsivescreen';
import Constant from '../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppTouchableOpacity} from '../../commom/AppTouchableOpacity';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

export default class FollowinviteBasic extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {viewContainer, text} = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={viewContainer}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="left" size={30} style={{marginLeft: 5}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: wp('100%')}}>
                        <Text style={text}>
                            {'Follow and Invite Friends'}
                        </Text>
                    </View>
                </View>
                    <View style={{height:hp('100%')}}>
                        <View >
                            <AppTouchableOpacity
                                title={'Follow Contacts'}
                                exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                icon={<FeatherIcon name="user-plus" size={40} style={{marginLeft: 5}} />}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View >
                            <AppTouchableOpacity
                                title={'Invite Friends by Email'}
                                exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                icon={<SimpleLineIcon name="envelope" size={40} style={{marginLeft: 5}} />}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View >
                            <AppTouchableOpacity
                                title={'Invite Friends by SMS'}
                                exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                icon={<AntIcon name="message1" size={40} style={{marginLeft: 5}}/>}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View >
                            <AppTouchableOpacity
                                title={'Invite Friends by..'}
                                exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                icon={<AntIcon name="sharealt" size={40} style={{marginLeft: 5}}/>}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                    </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
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
})