import React,{Component} from 'react';
import {View,Text,SafeAreaView,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import Constant from '../helper/themeHelper';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../helper/responsivescreen';
import Icon from 'react-native-vector-icons/Feather';
import {AppButton} from '../commom/AppButton';

export default class ForgetpassBasic extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        };
    }
    render(){
        const{username}=this.state;
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Icon name="lock" size={130} style={{padding: 5}}/>
                    <Text style={{fontWeight:'bold',fontSize:wp("5%")}}>{'Trouble Logging In?'}</Text>
                </View>
                <View style={{marginTop:hp('3%')}}>
                    <Text style={styles.text}>
                        {"Enter your username or email and we'll send you a link to get back into your account"}
                    </Text>
                    <TextInput
                        style={[styles.textContainer,{marginTop:20}]}
                        placeholder={'Username'}
                        clearButtonMode={'while-editing'}
                        onChangeText={text => this.onTextChange('username', text)}
                        value={username}
                    />
                </View>
                <View>
                    <AppButton
                        title={'Sign Up'}
                        exStyle={{width: '90%', marginTop: 20}}
                        disable
                        onPress={()=>this.props.navigation.navigate('Login')}
                    />

                </View>
                <View style={{height: hp('5%'), justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                        fontSize: wp('5%'),
                        color: Constant.color.lightGray,
                        textAlign: 'center'
                    }}>{"-------------------OR---------------------"}</Text>
                </View>
                <View style={{height:hp('8%'),justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Registration')}>
                        <Text style={{textAlign: 'center',fontWeight:'bold',fontSize:20}}>{"Create New Account"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderTopWidth:1,borderTopColor:Constant.color.lightGray,marginTop:20}}>
                    <View style={{height:hp('8%'),justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                            <Text style={{textAlign: 'center',fontWeight:'bold',fontSize:20}}>{"Back To Login"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    text: {
        textAlign: 'center',
        color: Constant.color.darkGray,
        fontSize: wp('4.5%'),
      //  marginTop:hp("3%")
    },
    textContainer: {
        borderWidth: 1,
        height: 50,
        borderColor: 'gray',
        paddingHorizontal: 10,
        fontSize: 17,
        borderRadius:3,
        width:wp("90%"),
        marginLeft:20
    },
})