import React from 'react';
import {StyleSheet, Text, TouchableHighlight,  View} from 'react-native';
import Constant from '../helper/themeHelper';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../helper/responsivescreen';


const AppTouchablehightlight = props => {
    const {viewModal,viewModalText} = styles;
    const {title,icon,onPress,exStyle} = props;
    return (
        <TouchableHighlight
            onPress={onPress}>
            <View style={[viewModal,exStyle && exStyle]}>
                <View style={{justifyContent:'center',marginLeft:10}}>
                    {icon}
                </View>
                <View style={[viewModalText,exStyle]}>
                    <Text style={{fontSize:wp('5%')}}>{title}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles= StyleSheet.create({
    viewModalText:{
        borderWidth:0.5,
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderTopColor:'transparent',
        borderBottomColor:Constant.color.lightGray,
        width:wp('100%'),
        justifyContent:'center',marginLeft:15,
    },
    viewModal:{
        height:hp('8%'),
        flexDirection:'row',
    },
})
export {AppTouchablehightlight};