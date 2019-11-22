import React,{Component} from 'react';
import {SafeAreaView, View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen'
import Icon from 'react-native-vector-icons/AntDesign';
import Constant from '../../../helper/themeHelper'
import {AppTouchableOpacity} from "../../../commom/AppTouchableOpacity";

export default class AppsandwebsiteBasic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {viewContainer, text,exStyle,textsubLast} = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={viewContainer}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Security')}>
                            <Icon name="left" size={25} style={{marginLeft: 5}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: wp('80%')}}>
                        <Text style={text}>
                            {'Apps and Websites'}
                        </Text>
                    </View>
                </View>
                <View>
                    <AppTouchableOpacity
                        title={'Active'}
                        exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                        onPress={() => {this.props.navigation.navigate('Active')}}
                    />
                </View>
                <View>
                    <AppTouchableOpacity
                        title={'Expired'}
                        exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                        onPress={() => {this.props.navigation.navigate('Expire')}}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    textsubLast:{
        marginTop:10,
        marginLeft:15,
        color:Constant.color.blue,
        fontSize:wp('3%')
    },
    exStyle:{
        height:hp('7%'),
        borderBottomColor: 'transparent',
        marginLeft: 3,
        width:wp('85%')
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
