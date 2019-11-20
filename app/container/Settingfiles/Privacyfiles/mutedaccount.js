import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen';
import Constant from '../../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class MuteaccountBasic extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {viewContainer, text} = styles;
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
                            {'Muted Accounts'}
                        </Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{textAlign:'center',fontSize: wp('5%'),color:Constant.color.lightGray}}>
                        {'You Havent muted anyone'}</Text>
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