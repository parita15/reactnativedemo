import React,{Component} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from './../../../../helper/responsivescreen';
import Constant from './../../../../helper/themeHelper'

export default class SecurityBasic extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {viewContainer} = styles;
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={viewContainer}>
                    <Text style={{textAlign:'center',marginLeft:5,marginRight:5}}>
                        {'This is a list of emails Instagram has sent you about security and login in the last 14 days. ' +
                        'You can use it to verify which emails arereal and which are fake.'}
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    viewContainer:{
        justifyContent:'center',
        height:hp('10%'),
        borderTopColor:'transparent',
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderWidth:0.5,
        borderBottomColor:Constant.color.lightGray
    },
})