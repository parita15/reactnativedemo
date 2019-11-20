import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet,Switch} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen';
import Constant from '../../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppTouchableOpacity} from '../../../commom/AppTouchableOpacity';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './../../../navigation/accountyoufollownavigation';
const AppIndex = createAppContainer(AppNavigator);
export default class AccountyoufollowBasic extends Component {
    constructor(props) {
        super(props)

    }
    render() {
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
                            {'Undefined'}
                        </Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <AppIndex/>
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    viewContainer:{
        flexDirection: 'row',
        height:hp('5%'),
    },
    text:{
        fontSize:wp('5.5%'),
        marginLeft:5,
        // marginTop:5,
    },
})