import React,{Component} from 'react';
import {SafeAreaView, View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../../helper/responsivescreen'
import Icon from 'react-native-vector-icons/AntDesign';
import Constant from '../../../../helper/themeHelper';
import FeatherIcon from "react-native-vector-icons/Feather";


export default class ExpiredBasic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {viewContainer, text,exStyle,textsubLast,exsubViewall} = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={viewContainer}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="left" size={25} style={{marginLeft: 5}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: wp('80%')}}>
                        <Text style={text}>
                            {'Expired'}
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={{height:hp('80%'),justifyContent:'center',alignItems:'center'}}>
                        <FeatherIcon name={'lock'} size={150}/>
                        <Text style={{fontSize: wp('7%'),fontWeight:'600'}}>
                            {'No Expired Apps'}
                        </Text>
                        <Text style={{marginTop:20}}>
                            {"You don't have any expired authorized apps"}
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
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
