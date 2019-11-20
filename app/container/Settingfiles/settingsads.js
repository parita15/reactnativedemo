import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../helper/responsivescreen';
import Constant from '../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppTouchableOpacity} from '../../commom/AppTouchableOpacity';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default class AdsBasic extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        const {viewContainer, exStyle, text} = styles;
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
                            {'Ads'}
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{height:hp('100%')}}>
                        <View >
                            <AppTouchableOpacity
                                title={'Ad Activity'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                        <View >
                            <AppTouchableOpacity
                                title={'About Ads'}
                                exStyle={ exStyle}
                                onPress={() => {this.props.navigation.navigate('Settings')}}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    exStyle:{
        height:hp('7%'),
        borderBottomColor: 'transparent',
        marginLeft: 5
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