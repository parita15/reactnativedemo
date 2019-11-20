import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Constant from '../helper/themeHelper';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../helper/responsivescreen';

const AppButton = props => {
    const {btnContainer, btnText} = styles;
    const {title, onPress, exStyle} = props;
    return (
        <TouchableOpacity style={[btnContainer, exStyle && exStyle]} onPress={onPress}
        >
            <Text style={btnText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        width: wp('80%'),
        height: hp('5%'),
        borderRadius:4,
        backgroundColor: Constant.color.twitter,
        alignSelf: 'center',
      //  marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export {AppButton};
