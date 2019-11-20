import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet,Switch} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen';
import Constant from '../../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppTouchableOpacity} from '../../../commom/AppTouchableOpacity';

export default class CommentsBasic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switchValue:false,
            hideswitchValue:true,
            filterswitchValue:false,
        }
    }
    manualSwitch = (value) => {
        this.setState({switchValue: value})
    }

    hideSwitch = (value) => {
        this.setState({hideswitchValue: value})
    }

    filterSwitch = (value) => {
        this.setState({filterswitchValue: value})
    }
    render() {
        const {viewContainer, text,exStyle} = styles;
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
                            {'Comments'}
                        </Text>
                    </View>
                </View>
                <View style={{height:hp('20%'),borderWidth:0.5,borderLeftColor: 'transparent',borderRightColor: 'transparent',
                    borderTopColor:'transparent',borderBottomColor:Constant.color.lightGray }}>
                    <View>
                        <AppTouchableOpacity
                            title={'Controls'}
                            exStyle={exStyle}
                            activeOpacity={0.99}
                        />
                    </View>
                    <View >
                        <AppTouchableOpacity
                            title={'Block Comments From'}
                            exStyle={exStyle}
                        />
                    </View>
                    <View style={{height:hp('7%'),marginLeft:15}}>
                        <Text >{'Any new comments from people you block wont be visible to anyone but them.'}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <AppTouchableOpacity
                            title={'Filters'}
                            exStyle={exStyle}
                            activeOpacity={0.99}
                        />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <AppTouchableOpacity
                            title={'Hide Offensive Comments'}
                            exStyle={exStyle}
                            activeOpacity={0.99}
                        />
                        <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                            <Switch onValueChange = {this.hideSwitch}
                                    value = {this.state.hideswitchValue}/>
                        </View>
                    </View>
                    <View style={{height:hp('7%'),marginLeft:15}}>
                        <Text >{'Automatically hide comments that may be offemnsive from your posts.'}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <AppTouchableOpacity
                            title={'Manual Filter'}
                            exStyle={exStyle}
                            activeOpacity={0.99}
                        />
                        <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                            <Switch  onValueChange = {this.manualSwitch}
                                     value = {this.state.switchValue}/>
                        </View>
                    </View>
                    {
                        !this.state.switchValue &&
                        <View style={{height:hp('7%'),marginLeft:15}}>
                            <Text >{'Hide comments that contain specific words or phrases from your posts.'}</Text>
                        </View>
                    }
                    {

                        this.state.switchValue &&
                        <View style={{height:hp('10%')}}>
                            <View style={{height:hp('5%'),marginLeft:15}}>
                                <Text style={{color:Constant.color.lightGray}}>{'Words,separted by commans...'}</Text>
                            </View>
                            <View style={{height:hp('7%'),marginLeft:15}}>
                                <Text >{'Choose words or phrases, and we will hide comments that contain those words or phrases'}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <AppTouchableOpacity
                                    title={'Manual Filter'}
                                    exStyle={exStyle}
                                    activeOpacity={0.99}
                                />
                                <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                                    <Switch  onValueChange = {this.filterSwitch}
                                             value = {this.state.filterswitchValue}/>
                                </View>
                            </View>
                            <View style={{height:hp('7%'),marginLeft:15}}>
                                <Text >{'Hide comments that contain specific words or phrases that are most commonly reorted on your posts.'}</Text>
                            </View>
                        </View>
                    }
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