import React,{Component} from 'react';
import {SafeAreaView, View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../../helper/responsivescreen'
import Icon from 'react-native-vector-icons/AntDesign';
import Constant from '../../../../helper/themeHelper';
import {AppTouchableOpacity} from '../../../../commom/AppTouchableOpacity';

export default class FormerlinksinbioBasic extends Component {
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
                            {'Account Data'}
                        </Text>
                    </View>
                </View>
                <View style={{height:hp('80%'),borderWidth: 0.5,
                    borderTopColor: 'transparent',borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',borderBottomColor:Constant.color.lightGray}}>
                    <View>
                        <AppTouchableOpacity
                            title={'Former links in bio'}
                            exStyle={exStyle}
                            exTextstyle={{fontSize: wp('7%')}}
                            activeOpacity={0.99}
                        />
                    </View>
                    <View>
                        <Text style={{marginLeft:15,color:Constant.color.lightGray,fontSize: wp('3.5%')}}>
                            {'Your account doesnt have any information to show here'}
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'ABOUT US'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'SUPPORT'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'PRESS'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'API'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'JOBS'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'PRIVACY'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'TERMS'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'DIRECTORY'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'PROFILES'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'HASHTAGS'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={textsubLast}>
                            {'LANGUAGE'}
                        </Text>
                    </TouchableOpacity>
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
