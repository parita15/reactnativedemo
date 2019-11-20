import React,{Component} from 'react';
import {View,SafeAreaView,Text,StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from './../../../../helper/responsivescreen';
import Constant from './../../../../helper/themeHelper';
export default class OtherBasic extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { viewContainer} = styles;
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={ viewContainer}>
                    <Text style={{textAlign:'center',marginLeft:5,marginRight:5}}>
                        {'This is a list of the emails Instagram has sent you in last 14 days that are not about security or login.' +
                        'You can use it to verify which emails are real and which are fake.'}
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