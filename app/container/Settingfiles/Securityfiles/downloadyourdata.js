import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen'
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Constant from '../../../helper/themeHelper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {AppButton} from "../../../commom/AppButton";

export default class DownloadBasic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''}
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
        const {viewContainer, text,viewSearch,textContainer} = styles;
        const {email} = this.state;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{height:hp('82%'),borderWidth:0.5,borderBottomColor:Constant.color.lightGray,
                            borderRightColor:'transparent',borderLeftColor:'transparent',borderTopColor:'transparent'}}>
                    <View style={viewContainer}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Security')}>
                                <Icon name="left" size={25} style={{marginLeft: 5}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: wp('80%')}}>
                            <Text style={text}>
                                {'Download Your Data'}
                            </Text>
                        </View>
                    </View>
                    <View style={{height:hp('17%'),justifyContent:'center',alignItems:'center'}}>
                        <SimpleLineIcon name={'cloud-download'} size={100}/>
                    </View>
                    <View style={{height:hp('9%'),justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize: wp('7%'),textAlign:'center'}}>
                            {"Get a Copy of What You've Shared on Instagram"}
                        </Text>
                    </View>
                    <View style={{height:hp('10%'),justifyContent:'center',alignItems:'center'}}>
                        <Text style={{textAlign:'center',marginLeft:10,fontSize: wp('3.5%'),color:Constant.color.lightGray}}>
                            {"We'll email you a link to a file with your photos,comments,profile information and more.It may take" +
                            "up to 48 hours to collect this data and send it to you."}
                        </Text>
                    </View>
                    <View style={viewSearch}>
                        <View style={{width:wp('75%'),justifyContent:'center',alignItems:'center'}}>
                            <TextInput
                                style={textContainer}
                                clearButtonMode={'while-editing'}
                                placeholder={"Email"}
                                returnKeyType="done"
                                onChangeText={text => this.onTextChange('email', text)}
                                value={email}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: hp('2%')}}>
                    <AppButton
                        title={'Request Download'}
                        exStyle={{width: wp('90%')}}
                        onPress={this.onPress}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    viewSearch:{
        width:wp('90%'),
        height:hp('6%'),
        flexDirection: 'row',
        borderWidth:0.7,
        borderTopColor: 'transparent',
        marginLeft:15,
        borderBottomColor: 'black',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent'
    },
    textContainer: {
        fontSize: 17,
        width: wp('75%'),
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