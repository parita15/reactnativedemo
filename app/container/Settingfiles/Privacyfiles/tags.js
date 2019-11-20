import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet,Switch} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen';
import Constant from '../../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppTouchableOpacity} from '../../../commom/AppTouchableOpacity';

export default class TagsBasic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switchValue:true}
    }
    switchValue = (value) => {
        this.setState({switchValue: value})
    }
    render() {
        const {viewContainer, text, exStyle} = styles;
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
                            {'Tags'}
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <AppTouchableOpacity
                            title={'Add Automatically'}
                            exStyle={exStyle}
                            activeOpacity={0.99}
                        />
                        <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                            <Switch onValueChange = {this.switchValue}
                                    value = {this.state.switchValue}/>
                        </View>
                    </View>
                    <View style={{height:hp('7%'),marginLeft:15,flexDirection: 'row'}}>
                        <Text style={{color:Constant.color.lightGray,fontSize: wp('3%')}}>
                            {'Choose how you want photos and videos of you added to your profile.'}</Text>
                        <TouchableOpacity style={{lexDirection:'row'}}>
                            <Text style={{fontSize: wp('3%')}}>{'Learn more'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <AppTouchableOpacity
                            title={'Hide Photos and Videos'}
                            exStyle={exStyle}
                        />
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