import React from 'react';
import {StyleSheet, Text, TouchableOpacity,  View} from 'react-native';
import Constant from '../helper/themeHelper';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../helper/responsivescreen';


const AppTouchableOpacity = props => {
    const {viewModal,viewModalText} = styles;
    const {title, exicon,icon,onPress,exStyle,activeOpacity,exTextstyle} = props;
    return (
        <TouchableOpacity
            onPress={onPress} activeOpacity={activeOpacity}>
            <View style={[viewModal,exStyle && exStyle]}>
                <View style={{justifyContent:'center',marginLeft:10}}>
                    {icon}
                </View>
                <View style={[viewModalText,exStyle]}>
                    <Text style={[{fontSize:wp('5%')},exTextstyle]}>{title}</Text>
                </View>
                <View style={{justifyContent:'center',width:wp('15%')}}>
                    {exicon}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    viewModalText:{
        borderWidth:0.5,
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderTopColor:'transparent',
        borderBottomColor:Constant.color.lightGray,
        width:wp('70%'),
        justifyContent:'center',
        marginLeft:15,
    },
    viewModal:{
        height:hp('6%'),
        flexDirection:'row',
    },
})
export {AppTouchableOpacity};