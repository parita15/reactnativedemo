import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen';
import Constant from '../../../helper/themeHelper';
import Icon from 'react-native-vector-icons/Entypo';

export default class PasswordBasic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currpassword: '',
            newpassword: '',
            newpasswordagain: '',
        }
    }
    onTextChange = (key, value) => {
        debugger
        this.setState({
            [key]: value,
            status: true,
            empty: false
        });
    };


    render() {
        const {viewContainer, text, textContainer,viewTextinput} = styles;
        const {currpassword,newpassword,newpasswordagain} = this.state;
        return (
            <SafeAreaView style={{flex: 1}}>

                <View style={viewContainer}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name={'cross'} size={35} />
                        </TouchableOpacity>
                    </View>
                    <View style={{width: wp('80%')}}>
                        <Text style={text}>
                            {'Password'}
                        </Text>
                    </View>
                </View>
                <View style={{height:hp('100%')}}>
                    <View style={viewTextinput}>
                        <TextInput
                            style={textContainer}
                            placeholder={'Current Password'}
                            returnKeyType="next"
                            secureTextEntry={'true'}
                            onChangeText={text => this.onTextChange('currpassword', text)}
                            value={currpassword}
                        />
                    </View>
                    <View style={viewTextinput}>
                        <TextInput
                            style={textContainer}
                            placeholder={'New Pasword'}
                            returnKeyType="next"
                            secureTextEntry={'true'}
                            onChangeText={text => this.onTextChange('newpassword', text)}
                            value={newpassword}
                        />
                    </View>
                    <View style={viewTextinput}>
                        <TextInput
                            style={textContainer}
                            placeholder={'New password again'}
                            returnKeyType="done"
                            secureTextEntry={'true'}
                            onChangeText={text => this.onTextChange('newpasswordagain', text)}
                            value={newpasswordagain}
                        />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft:10,marginTop: 15,fontSize:wp('3%')}}>{'If youve forgotten your password you can'}</Text>
                        <TouchableOpacity style={{marginTop: 15}}>
                            <Text style={{color:Constant.color.blue,fontSize:wp('3%')}}>
                                {' reset it using Facebook'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    viewTextinput:{
        width:wp('95%'),
        borderWidth:0.5,
        height:hp('6%'),
        marginTop:10,
        justifyContent:'center',
        marginLeft:10,
        borderRadius:5,
        borderColor:Constant.color.lightGray
    },
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
    textContainer: {
        fontSize: 17,
        width: wp('75%'),
        marginLeft:5
    },
})