import React,{Component} from 'react';
import {SafeAreaView, View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen'
import Icon from 'react-native-vector-icons/AntDesign';
import Constant from '../../../helper/themeHelper'

export default class AppsandwebsiteBasic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {viewContainer, text,textAdactivity,mainViewcontainer} = styles;
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
                            {'Ad Activity'}
                        </Text>
                    </View>
                </View>
                <View style={mainViewcontainer}>
                    <Text style={textAdactivity}>
                        {'Your Ad Activity'}
                    </Text>
                    <Text style={{marginLeft:10}}>
                        {"See the ads you've recently interacted with and learn more about the brands nehind the,"}
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    mainViewcontainer:{
        height:hp('9%'),
        borderWidth: 0.5,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor:Constant.color.lightGray
    },
    textAdactivity:{
        marginLeft:10,
        marginTop:10,
        fontWeight:'700',
        fontSize: wp('4%')
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
