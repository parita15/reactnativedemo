import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen';
import Constant from '../../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './../../../navigation/closefriendnavigation';
const AppIndex = createAppContainer(AppNavigator);
export default class ClosefriendBasic extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {viewContainer, text} = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={viewContainer}>
                    <View style={{width: wp('80%')}}>
                        <Text style={text}>
                            {'Close Friends List'}
                        </Text>
                    </View>
                    <View style={{width: wp('20%'),marginLeft: 10}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Text style={text}>
                                {'Done'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',height:hp('7%')}}>
                    <Text style={{textAlign:'center'}}>{'We dont send notifications when you edit your list.'}</Text>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>{'Learn how it works'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <AppIndex/>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
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