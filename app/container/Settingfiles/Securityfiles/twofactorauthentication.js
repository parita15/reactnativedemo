import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen';
import Constant from '../../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppButton} from '../../../commom/AppButton';

export default class TwofactorauthenticationBasic extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const{viewContainer,text} = styles;
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
                <View style={{height:hp('80%'),borderWidth: 0.5,borderTopColor: 'transparent',
                            borderLeftColor: 'transparent',borderRightColor: 'transparent',
                            borderBottomColor:Constant.color.lightGray }}>
                    <View style={{height:hp('25%'),justifyContent:'center',
                        alignItems:'center'}}>
                        <MaterialCommunityIcon name={'security-network'} size={80}/>
                    </View>
                    <View style={{height:hp('8%')}}>
                        <Text style={{textAlign:'center',fontSize: wp('6%')}}>
                            {'Add Extra Security With Two-Factor Authentication'}
                        </Text>
                    </View>
                    <View style={{height:hp('6%')}}>
                        <Text style={{color:Constant.color.blackColor,textAlign:'center',fontSize: wp('3.5%'),marginTop:5}}>
                            {'Add protection to your account every time you log in on a phone or computer we dont recognize'}
                        </Text>
                    </View>
                    <View style={{height:hp('8%')}}>
                        <Text style={{marginRight:10,marginLeft:10,color:Constant.color.blackColor,textAlign:'center',fontSize: wp('3.5%'),marginTop:5}}>
                            {'We will send a text message with a login code, or you can use a security app of your choice like Duo Mobile' +
                            'or Google Authenticator.'}
                        </Text>
                    </View>
                    <View style={{height:hp('5%'),justifyContent:'center'}}>
                        <TouchableOpacity>
                            <Text style={{textAlign:'center',color:Constant.color.twitter}}>{'Learn More'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: hp('2%')}}>
                <AppButton
                    title={'Get Started'}
                    exStyle={{width: wp('90%')}}
                    onPress={()=>this.props.navigation.navigate('Gettingstarted')}
                />
                </View>
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
        height:hp('5%'),
    },
    text:{
        fontSize:wp('5.5%'),
        marginLeft:5,
        // marginTop:5,
    },
})