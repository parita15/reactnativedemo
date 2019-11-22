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
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SecurityBasic extends Component {
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
                            {'Security'}
                        </Text>
                    </View>
                </View>
                <ScrollView indicatorStyle={'white'}>
                    <View >
                        <View style={{height:hp('35%'),borderBottomColor: Constant.color.lightGray,
                            borderWidth: 1,borderTopColor: 'transparent'}}>
                            <View style={{height:hp('6%'),marginLeft: 20,
                                justifyContent:'center'}}>
                                <Text style={{fontSize: wp('5%'),fontWeight:'bold'}}>{'Login Security'}</Text>
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Password'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<FeatherIcon name="key" size={40} style={{marginLeft: 5}} />}
                                    onPress={() => {this.props.navigation.navigate('Password')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Login Activity'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<AntIcon name="enviromento" size={40}  style={{marginLeft: 5}}/>}
                                    onPress={() => {this.props.navigation.navigate('Settings')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Two-Factor Authentication'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<SimpleLineIcon name="screen-smartphone" size={40} style={{marginLeft: 5}}/>}
                                    onPress={() => {this.props.navigation.navigate('Twofactorauthentication')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Emails From Instagram'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<SimpleLineIcon name="envelope" size={40} style={{marginLeft: 5}} />}
                                    onPress={() => {this.props.navigation.navigate('Emailfrominstagram')}}
                                />
                            </View>
                        </View>
                        <View style={{height:hp('100%')}}>
                            <View style={{height:hp('6%'),marginLeft: 23,
                                justifyContent:'center'}}>
                                <Text style={{fontSize: wp('5%'),fontWeight:'bold'}}>{'Data and History'}</Text>
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Access Data'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<EvilIcon name="chart" size={40} style={{marginLeft: 5}}/>}
                                    onPress={() => {this.props.navigation.navigate('Accessdata')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Download Data'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<AntIcon name="download" size={37}  style={{marginLeft: 5}}/>}
                                    onPress={() => {this.props.navigation.navigate('Downloadyourdata')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Apps and Websites'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<AntIcon name="laptop" size={40} style={{marginLeft: 5}} />}
                                    onPress={() => {this.props.navigation.navigate('Appsandwebsites')}}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Search History'}
                                    exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                                    icon={<EvilIcon name="search" size={35} style={{marginLeft: 5}} />}
                                    onPress={() => {this.props.navigation.navigate('SearchHistory')}}
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