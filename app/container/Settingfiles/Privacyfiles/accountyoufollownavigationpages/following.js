import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import Constant from "../../../../helper/themeHelper";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "../../../../helper/responsivescreen";
import Anticon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo'


export default class YourlistBasic extends Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ''}
    }
    onTextChange = (key, value) => {
        debugger
        this.setState({
            [key]: value,
            status: true,
            empty: false
        });
    };
    render(){
        const { viewConnectbtn,
            viewContacticon,
            viewMainconnect,viewSearch,
            followButton,followText,
            viewSearchicon,textContainer} = styles;
        const { search }=this.state;
        return(
            <View>
                <KeyboardAvoidingView behavior="padding"  style={{ paddingTop: 20,justifyContent: 'center'}}>
                    <View style={viewSearch}>
                        <View style={ viewSearchicon}>
                            <EvilIcons name="search" size={30} style={{marginLeft: 5}} />
                        </View>
                        <View style={{width:wp('75%'),justifyContent:'center',alignItems:'center'}}>
                            <TextInput
                                style={textContainer}
                                clearButtonMode={'while-editing'}
                                placeholder={'Search Following..'}
                                returnKeyType="done"
                                onChangeText={text => this.onTextChange('search', text)}
                                value={search}
                            />
                        </View>
                    </View>
                    <View style={viewMainconnect}>
                        <View style={viewContacticon}>
                            <Anticon name={'contacts'} size={40} />
                        </View>
                        <View style={{width:wp('50%')}}>
                            <View style={{marginTop: 20}}>
                                <Text style={{fontWeight:'700'}}>{'Connect Contacts'}</Text>
                            </View>
                            <View style={{marginTop: 5}}>
                                <Text style={{color:Constant.color.lightGray}}>{'Follow people you know'}</Text>
                            </View>
                        </View>
                        <View style={viewConnectbtn}>
                                <TouchableOpacity style={followButton}>
                                    <Text style={followText}>{'Connect'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginLeft: 5}}>
                                    <Icon name={'cross'} size={20} color={'lightgrey'}/>
                                </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewConnectbtn:{
        width:wp('30%'),
        flexDirection:'row',
        marginTop: 20
    },
    viewContacticon:{
        alignItems:'center',
        width:wp('20%'),
        justifyContent: 'center'
    },
    viewMainconnect:{
        borderWidth:0.5,
        borderBottomColor:Constant.color.lightGray,
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderTopColor:'transparent',
        height:hp('10%'),
        flexDirection: 'row'
    },
    viewSearch:{
        width:wp('90%'),
        height:hp('4.5%'),
        flexDirection: 'row',
        borderWidth:0.7,
        marginLeft:15,
        borderBottomColor:Constant.color.lightGray,
        borderRightColor:'transparent',
        borderLeftColor:'transparent',
        borderTopColor:'transparent'
    },
    viewSearchicon:{
        height:hp('4.5%'),
        width:wp('15%'),
        alignItems:'flex-start',
        justifyContent:'center'
    },
    textContainer: {
        fontSize: 17,
        width: wp('75%'),
    },
    followButton: {
        width:wp('20%'),
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        height: hp('3%'),
        backgroundColor:Constant.color.twitter
    },
    followText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: Constant.color.white,
    },
})