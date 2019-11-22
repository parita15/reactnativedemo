import React,{Component} from 'react';
import {SafeAreaView, View,ScrollView,Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from './../../../helper/responsivescreen'
import Icon from 'react-native-vector-icons/AntDesign';
import Constant from './../../../helper/themeHelper';
import {AppTouchableOpacity} from '../../../commom/AppTouchableOpacity';

export default class AccessdataBasic extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {viewContainer,text,exStyle,exsubStyle,exsubViewall,textDob,textsubLast} = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={viewContainer}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="left" size={25}  style={{marginLeft:5}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: wp('80%')}}>
                        <Text style={text}>
                            {'Account Data'}
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{height:hp('300%')}}>
                        <View style={{height:hp('290%'),
                                    borderWidth: 0.5,borderBottomColor:Constant.color.lightGray,
                                borderRightColor: 'transparent',borderLeftColor: 'transpaent',
                                borderTopColor: 'transparent'}}>
                            <View>
                                <AppTouchableOpacity
                                    title={'Account Info'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontSize: wp('7%')}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Date joined'}
                                    exStyle={exStyle}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Account privacy changes'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Accountprivacychanges')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Password changes'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Passwordchanges')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Former email addresses'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Formeremailaddress')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Former phone numbers'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Formerphonenumbers')}
                                />
                            </View>
                            <View>
                                <AppTouchableOpacity
                                    title={'Date of birth'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <View>
                                    <Text style={textDob}>
                                        {'Your account doesnt have any information to show here.'}
                                    </Text>
                                </View>
                            </View>
                            <View style= {{ marginTop:20}}>
                                <AppTouchableOpacity
                                    title={'Profile Info'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontSize: wp('7%')}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Former usernames'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Formerusername')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Former full names'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Formerfullname')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Former bio texts'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Formerbiotexts')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Former links in bio'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Formerlinksinbio')}
                                />
                            </View>
                            <View style= {{ marginTop:20}}>
                                <AppTouchableOpacity
                                    title={'Bussiness Profile Info'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontSize: wp('7%')}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style={{height:hp('7%')}}>
                                <AppTouchableOpacity
                                    title={'Switched to business account'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style= {{ marginTop:20}}>
                                <AppTouchableOpacity
                                    title={'Connections'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontSize: wp('7%')}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Current follow requests'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Currentfollowrequests')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Accounts following you'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Accountfollowingyou')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Accounts you follow'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Accountsyoufollow')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Hashtags you follow'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Hashtagsyoufollow')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Accounts you blocked'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Accountsyoublocked')}
                                />
                            </View>
                            <View style= {{ marginTop:20}}>
                                <AppTouchableOpacity
                                    title={'Account Activity'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontSize: wp('7%')}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Logins'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Logins')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Logouts'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Logouts')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Search history'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Searchhistory')}
                                />
                            </View>
                            <View style= {{ marginTop:20}}>
                                <AppTouchableOpacity
                                    title={'Stories Activity'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontSize: wp('7%')}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Polls'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Polls')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Emoji Sliders'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Emojisliders')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Questions'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Questions')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Countdowns'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Countdowns')}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                                <AppTouchableOpacity
                                    title={'Quizzes'}
                                    exStyle={exsubStyle}
                                    activeOpacity={0.99}
                                />
                                <AppTouchableOpacity
                                    title={'View All'}
                                    exStyle={exsubViewall}
                                    exTextstyle={{color:Constant.color.twitter}}
                                    onPress={()=>this.props.navigation.navigate('Quizzes')}
                                />
                            </View>
                            <View style= {{ marginTop:20}}>
                                <AppTouchableOpacity
                                    title={'Ads'}
                                    exStyle={exStyle}
                                    exTextstyle={{fontSize: wp('7%')}}
                                    activeOpacity={0.99}
                                />
                            </View>
                            <View style={{height:hp('9%')}}>
                            <AppTouchableOpacity
                                title={'Ads Interests'}
                                exStyle={exsubStyle}
                                activeOpacity={0.99}
                            />
                            <AppTouchableOpacity
                                title={'View All'}
                                exStyle={exsubViewall}
                                exTextstyle={{color:Constant.color.twitter}}
                                onPress={()=>this.props.navigation.navigate('Adsinterest')}
                            />
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
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    textsubLast:{
        marginTop:10,
        marginLeft:15,
        color:Constant.color.blue,
        fontSize:wp('3%')
    },
    textDob: {
        fontSize: wp('3.5%'),
        color: Constant.color.lightGray,
        marginLeft: 15
    },
    exsubStyle:{
        height:hp('4.5%'),
        borderBottomColor: 'transparent',
        marginLeft: 3
    },
    exsubViewall:{
        height:hp('3%'),
        borderBottomColor: 'transparent',
        marginLeft: 3
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