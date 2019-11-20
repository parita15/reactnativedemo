import React,{Component} from 'react';
import {
    AsyncStorage, StyleSheet, SafeAreaView, View, Text,
    TextInput,
    TouchableOpacity, ScrollView, KeyboardAvoidingView
} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../helper/responsivescreen';
import Constant from '../../helper/themeHelper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppTouchableOpacity} from '../../commom/AppTouchableOpacity';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class SettingBasic extends Component{
    constructor(props){
        super(props)
        this.state = {
            search: '',}
    }

    componentWillMount(): void {
        this.props.navigation.setParams({logout:this.logout.bind(this)});
    }

     logout(){
        AsyncStorage.removeItem('login');
       this.props.navigation.navigate('Login');
     }

        onTextChange = (key, value) => {
            debugger
            this.setState({
                [key]: value,
                status: true,
                empty: false
            });
        };
    render(){
        const { text,viewContainer, textContainer, viewSearchicon,viewSearch,textLogin,logoutAddacContent,viewLogininfo} = styles;
        const { search } = this.setState;
        return (
            <SafeAreaView style={{flex:1}}>
                <KeyboardAvoidingView behavior="padding"  style={{ paddingTop: 20,justifyContent: 'center'}}>
                <View style={viewContainer}>
                    <View >
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                            <Icon name="left" size={25}  style={{marginLeft:5}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:wp('100%')}}>
                        <Text style={text}>
                            {'Settings'}
                        </Text>
                    </View>
                </View>
                <ScrollView indicatorStyle={'white'} >
                <View style={{height:hp('73%'),borderTopColor:'transparent',borderBottomColor: 'lightgrey',borderWidth: 1}}>
                    <View style={viewSearch}>
                        <View style={ viewSearchicon}>
                           <EvilIcons name="search" size={35} style={{marginLeft: 5}} />
                        </View>
                        <View style={{width:wp('75%'),justifyContent:'center',alignItems:'center'}}>
                            <TextInput
                                style={textContainer}
                                clearButtonMode={'while-editing'}
                                placeholder={"Search"}
                                returnKeyType="done"
                                onChangeText={text => this.onTextChange('search', text)}
                                value={search}
                            />
                        </View>
                    </View>
                    <View>
                        <AppTouchableOpacity
                            title={'Follow and Invite Friends'}
                            exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                            icon={<FeatherIcon name="user-plus" size={40} style={{marginLeft: 5}} />}
                            onPress={() => {this.props.navigation.navigate('Followinvitefriend')}}
                        />
                    </View>
                    <View>
                        <AppTouchableOpacity
                            title={'Your Activity'}
                            exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                            icon={ <MaterialIcon name="progress-clock" size={40}  style={{marginLeft: 5}} />}
                            onPress={() => {this.props.navigation.navigate('Settings')}}
                        />
                    </View>
                    <View>
                        <AppTouchableOpacity
                            title={'Notifications'}
                            exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                            icon={<Ionicons name={'ios-notifications-outline'} size={53} style={{marginLeft: 10}} /> }
                            onPress={() => {this.props.navigation.navigate('Settingnotification')}}
                        />
                    </View>
                    <View>
                        <AppTouchableOpacity
                            title={'Privacy'}
                            exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                            icon={ <FeatherIcon name="lock" size={40} style={{marginLeft: 5}} />}
                            onPress={() => {this.props.navigation.navigate('Privacy')}}
                        />
                    </View>
                    <View>
                        <AppTouchableOpacity
                            title={'Security'}
                            exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                            icon={ <MaterialIcon name="security" size={40} style={{marginLeft: 5}} />}
                            onPress={() => {this.props.navigation.navigate('Security')}}
                        />
                    </View>
                    <View>
                        <AppTouchableOpacity
                            title={'Ads'}
                            exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                            icon={ <Icon name="setting" size={40}  style={{marginLeft: 5}}/>}
                            onPress={() => {this.props.navigation.navigate('Settingads')}}
                        />
                    </View>
                    <View>
                        <AppTouchableOpacity
                            title={'Account'}
                            exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                            icon={ <EvilIcons name="user" size={40} style={{marginLeft: 5}} />}
                            onPress={() => {this.props.navigation.navigate('Accounts')}}
                        />
                    </View>
                    <View>
                        <AppTouchableOpacity
                            title={'Help'}
                            exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                            icon={ <FeatherIcon name="help-circle" size={40} style={{marginLeft: 5}} />}
                            onPress={() => {this.props.navigation.navigate('Help')}}
                        />
                    </View>
                    <View >
                        <AppTouchableOpacity
                            title={'About'}
                            exStyle={{height:hp('7%'),borderBottomColor: 'transparent'}}
                            icon={ <Ionicons name="md-information-circle-outline" size={50} style={{marginLeft:5}} />}
                            onPress={() => {this.props.navigation.navigate('About')}}
                        />
                    </View>
                </View>
                <View >
                    <TouchableOpacity style={{height:hp('6%'),justifyContent:'center'}}>
                        <View style={{marginLeft: 15}}>
                            <Text style={[textLogin,{fontWeight:'500'}]}>{'Logins'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={{height:hp('6%'),flexDirection: 'row'}}>
                        <View style={viewLogininfo}>
                            <Text style={textLogin}>{'Login Info'}</Text>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <AntIcon name="right" size={20} color={'lightgrey'}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={logoutAddacContent} onPress={()=>{this.props.navigation.navigate('Login')}}>
                        <Text style={[textLogin,{color:Constant.color.twitter}]}>{'Add Account'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>this.logout()}
                                      style={logoutAddacContent}>
                        <Text style={textLogin}>{'Log Out'}</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    viewSearchicon:{
        height:hp('7%'),
        width:wp('15%'),
        justifyContent:'center',
        alignItems:'flex-start',
    },
    viewSearch:{
        width:wp('90%'),
        height:hp('6%'),
        flexDirection: 'row',
        borderWidth:0.7,
        borderTopColor: 'transparent',
        marginLeft:15,
        borderBottomColor: 'black',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent'
    },
    textContainer: {
        fontSize: 17,
        width: wp('75%'),
    },
    viewLogininfo:{
        width:wp('90%'),
        justifyContent:'center',
        marginLeft:15
    },
    logoutAddacContent:{
        height:hp('6%'),
        marginLeft: 15,
        justifyContent:'center'
    },
    textLogin:{
        fontSize: wp('6%')
    },
    viewContainer:{
        flexDirection: 'row',
        borderWidth:1,
        borderTopColor:'transparent',
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderBottomColor:Constant.color.lightGray,
        height:hp('5%')
    },
    text:{
        fontSize:wp('5%'),
        marginLeft:10,
        //marginTop:5,
    },
})