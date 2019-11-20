import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet,Switch,ScrollView} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen';
import Constant from '../../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppTouchableOpacity} from '../../../commom/AppTouchableOpacity';

export default class StoryBasic extends Component{
    constructor(props){
        super(props)
        this.state = {
            galleryswitchValue:false,
            archiveswitchValue:true,
            reshareswitchValue:false,
            sharingswitchValue:true,
            sharefbswitchValue:false,}
    }
    gallerySwitch = (value) => {
        this.setState({galleryswitchValue: value})
    }

    archiveSwitch = (value) => {
        this.setState({archiveswitchValue: value})
    }
   reshareSwitch = (value) => {
        this.setState({reshareswitchValue: value})
    }
    sharingSwitch = (value) => {
        this.setState({sharingswitchValue: value})
    }

    sharefbSwitch = (value) => {
        this.setState({sharefbswitchValue: value})
    }
    render(){
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
                            {'Story'}
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <View>
                        <View style={{borderWidth: 0.2,borderRightColor: 'transparent',borderLeftColor: 'transparent',
                                    borderTopColor: 'transparent',borderBottomColor:Constant.color.lightGray}}>
                            <View>
                                <AppTouchableOpacity
                                    title={'Hide Story From'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontWeight:'bold'}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'0 People'}
                                    exStyle={exStyle}
                                />
                            </View>
                            <View style={{height:hp('5%'),marginLeft:15}}>
                                <Text style={{color:Constant.color.lightGray,fontSize: wp('3.5%')}}>
                                    {'Hide your story and live videos from specific people.'}</Text>
                            </View>
                        </View>
                        <View style={{borderWidth: 0.2,borderRightColor: 'transparent',borderLeftColor: 'transparent',
                            borderTopColor: 'transparent',borderBottomColor:Constant.color.lightGray}}>
                            <View>
                                <AppTouchableOpacity
                                    title={'Close Friends'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontWeight:'bold'}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'0 People'}
                                    exStyle={exStyle}
                                />
                            </View>
                        </View>
                        <View style={{borderWidth: 0.2,borderRightColor: 'transparent',borderLeftColor: 'transparent',
                            borderTopColor: 'transparent',borderBottomColor:Constant.color.lightGray}}>
                            <View>
                                <AppTouchableOpacity
                                    title={'Allow Message Replies'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontWeight:'bold'}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Your Followers'}
                                    exStyle={exStyle}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Followers You Follow Back'}
                                    exStyle={exStyle}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Off'}
                                    exStyle={exStyle}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style={{height:hp('5%'),marginLeft:15}}>
                                <Text style={{color:Constant.color.lightGray,fontSize: wp('3.5%')}}>
                                    {'Choose who can reply to your story.'}</Text>
                            </View>
                        </View>
                        <View style={{borderWidth: 0.2,borderRightColor: 'transparent',borderLeftColor: 'transparent',
                            borderTopColor: 'transparent',borderBottomColor:Constant.color.lightGray}}>
                            <View>
                                <AppTouchableOpacity
                                    title={'Saving'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontWeight:'bold'}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <AppTouchableOpacity
                                    title={'Save to Gallery'}
                                    exStyle={exStyle}
                                    activeOpacity={0.99}
                                />
                                <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                                    <Switch  onValueChange = {this.gallerySwitch}
                                             value = {this.state.galleryswitchValue}/>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <AppTouchableOpacity
                                    title={'Save to Gallery'}
                                    exStyle={exStyle}
                                    activeOpacity={0.99}
                                />
                                <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                                    <Switch  onValueChange = {this.archiveSwitch}
                                             value = {this.state.archiveswitchValue}/>
                                </View>
                            </View>
                            <View style={{height:hp('7%'),marginLeft:15}}>
                                <Text style={{color:Constant.color.lightGray,fontSize: wp('3.5%')}}>
                                    {'Automatically save photos and videos in your archive so you dont have to save them' +
                                    'on your phone. Only you can see them after they disappear from your story.'}</Text>
                            </View>
                        </View>
                        <View style={{borderWidth: 0.2,borderRightColor: 'transparent',borderLeftColor: 'transparent',
                            borderTopColor: 'transparent',borderBottomColor:Constant.color.lightGray}}>
                            <View>
                                <AppTouchableOpacity
                                    title={'Sharing'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontWeight:'bold'}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <AppTouchableOpacity
                                    title={'Allow Resharing to Stories'}
                                    exStyle={exStyle}
                                    activeOpacity={0.99}
                                />
                                <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                                    <Switch  onValueChange = {this.reshareSwitch}
                                             value = {this.state.reshareswitchValue}/>
                                </View>
                            </View>
                            <View style={{height:hp('7%'),marginLeft:15}}>
                                <Text style={{color:Constant.color.lightGray,fontSize: wp('3.5%')}}>
                                    {'Other people can add your feed posts and IGTV videos to their stories.Your username will always show up with your post.'}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <AppTouchableOpacity
                                    title={'Allow Sharing'}
                                    exStyle={exStyle}
                                    activeOpacity={0.99}
                                />
                                <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                                    <Switch  onValueChange = {this.sharingSwitch}
                                             value = {this.state.sharingswitchValue}/>
                                </View>
                            </View>
                            <View style={{height:hp('7%'),marginLeft:15}}>
                                <Text style={{color:Constant.color.lightGray,fontSize: wp('3.5%')}}>
                                    {'Let others share photos and videos from your story as messages.'}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <AppTouchableOpacity
                                    title={'Share Your Story to Facebook'}
                                    exStyle={exStyle}
                                    activeOpacity={0.99}
                                />
                                <View style={{justifyContent:'center',alignItems:'center',width:wp('10%')}}>
                                    <Switch  onValueChange = {this.sharefbSwitch}
                                             value = {this.state.sharefbswitchValue}/>
                                </View>
                            </View>
                            <View style={{height:hp('7%'),marginLeft:15}}>
                                <Text style={{color:Constant.color.lightGray,fontSize: wp('3.5%')}}>
                                    {'Automatically share photos and videos from your story to your Facebook story.'}</Text>
                            </View>
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