import React, {Component} from 'react';
import {Alert,
        View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        TextInput,
        StyleSheet,
        KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp,
        heightPercentageToDP as hp} from '../helper/responsivescreen';
import Constant from '../helper/themeHelper';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppButton} from '../commom/AppButton';
import {connect} from 'react-redux';
import {setUser} from '../actions/userAction';
import {isValidPassword,
        isValidUserName,
        isValidFullName,
        isValidPhoneNumber} from '../helper/appHelper';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';

const REGISTRATION_FIELD = {
    USERNAME: 'username',
    FULLNAME: 'fullanme',
    PASSWORD: 'password',
    PHONE: 'phone',
};

class RegistrationBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            fullname: '',
            username: '',
            password: '',
            selectedField: '',
            empty: false,
            validPhone: false,
            status: true,
        };
    }

    ShowHideTextComponentView = () =>{

        if (this.state.status)
        {
            this.setState({status: false})
        }
        else
        {
            this.setState({status: true})
        }
    }
    onTextChange = (key, value) => {
        debugger
        this.setState({
            [key]: value,
           status: true,
            empty: false
        });
    };
    onPress = () =>{
        const {username,password,phone,fullname} = this.state
        let registration = {
            username: username,
            phone: phone,
            fullname: fullname,
            password: password,
        };

       if (username === '' || phone === ''  || password === '')
        {
            this.setState({
                empty: true
            })

        }
       else if(!username === '' || phone === '' || password === '')
       {
           this.setState({
               empty: false
           })
       }
       else if (!isValidPhoneNumber(phone))
       {
           this.setState({
               validPhone: true
           })
           Alert.alert('Failed','Please enter valid phonenumber','OK');
       }
       else if (!isValidFullName(fullname)){
           Alert.alert('Failed','Please enter valid fullname','OK');
       }
       else if (!isValidUserName(username)){
            Alert.alert('Failed','Please enter valid username and username should not be less than 5 character','OK');
        }
        else if (!isValidPassword(password)){
            this.setState({
                status: true
            })
            Alert.alert('Failed','Password should be of 8 character containing letter,digits,@ and #','OK');
        }
       else
       {
           this.props.setUser(registration)
           this.props.navigation.navigate('Login')
       }
    }

    handleFocus = (selectedField) => {
        this.setState({ selectedField });
    };

    render() {
        const {phone, fullname, username, password,selectedField, status, empty} = this.state;
        debugger
        const {labelStyle,
            viewContainer,
            viewValidation,
            selectedLabelStyle,fbButton,fbText,textContainer,viewBottomText,text,viewLognbtn,textOnac,textLoginbtn} = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <KeyboardAvoidingView behavior="padding"  style={{ paddingTop: 20,justifyContent: 'center'}}>
                     <View style={{height: hp('9%'), justifyContent: 'center',alignItems:'center'}}>
                        <Text style={styles.textMain}>{'Instagram'}</Text>
                    </View>

                    <View style={{height: hp('8%'), justifyContent: 'center'}}>
                        <Text style={styles.text}>{'Sign up to see photos and videos from your friends.'}</Text>
                    </View>

                     <View style={{height: hp('9%'), justifyContent: 'center', padding: 20}}>
                        <TouchableOpacity style={fbButton}>
                            <Icon name="logo-facebook" size={25} color={'white'} style={{marginRight: 10}}/>
                            <Text style={fbText}>{'Log in with facebook'}</Text>
                        </TouchableOpacity>
                        <View style={{height: hp('5%'), justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: wp('5%'),
                                color: Constant.color.lightGray,
                                textAlign: 'center'
                             }}>{'----------------   OR   ------------------'}</Text>
                        </View>
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center',marginTop: 10}}>
                        <View style={[viewContainer,{flexDirection:'row'}]}>
                            <View style={[this.state.phone.length > 0 && { borderWidth: 0.5,borderColor:'black',flexDirection:'row',borderRightColor:'transparent'}]}>
                                <Text style={(selectedField === REGISTRATION_FIELD.PHONE || phone !== '') && selectedLabelStyle || labelStyle}>
                                    {'Phone Number'}
                                </Text>
                                <View style={{flexDirection:'row',width:wp('75%')}}>
                                    <TextInput
                                        style={textContainer}
                                       // clearButtonMode={'while-editing'}
                                        onChangeText={text => this.onTextChange('phone', text)}
                                        value={phone}
                                        returnKeyLabel='Done'
                                        returnKeyType="next"
                                        keyboardType={'number-pad'}
                                        onSubmitEditing={() => { this.firstTextInput.focus(); }}
                                        onFocus={()=>this.handleFocus(REGISTRATION_FIELD.PHONE)}
                                        blurOnSubmit
                                    />
                                </View>
                            </View>
                            {
                                this.state.empty &&
                                <View style={viewValidation}>
                                    <EntypoIcon name="circle-with-cross" size={27} style={{padding: 10}} color={'red'}/>
                                </View> || !this.state.empty &&
                                <View style={viewValidation}>
                                    <AntIcon name="checkcircleo" size={25} color={'gray'} style={{marginRight: 10}}/>
                                </View>
                            }
                        </View>
                        <View style={[ viewContainer,{marginTop:10}]}>
                            <View style={[this.state.fullname.length > 0  && { borderWidth: 1,borderColor:'black'}]}>
                                <Text style={(selectedField === REGISTRATION_FIELD.FULLNAME || fullname !== '') && selectedLabelStyle || labelStyle}>
                                    {'Full Name'}
                                </Text>
                                 <TextInput
                                    ref={(input) => { this.firstTextInput = input; }}
                                    style={textContainer}
                                    clearButtonMode={'while-editing'}
                                    onChangeText={text => this.onTextChange('fullname', text)}
                                    value={fullname}
                                    returnKeyType="next"
                                    autoCorrect={false}
                                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                    onFocus={()=>this.handleFocus(REGISTRATION_FIELD.FULLNAME)}
                                    blurOnSubmit
                                />
                            </View>
                        </View>

                        <View style={[ viewContainer,{marginTop:10,flexDirection:'row'}]}>
                            <View style={[this.state.username.length > 0  && { borderWidth: 1,borderColor:'black'}]}>
                                <Text style={(selectedField === REGISTRATION_FIELD.USERNAME || fullname !== '') && selectedLabelStyle || labelStyle}>
                                    {'User Name'}
                                </Text>
                                <View style={{flexDirection:'row',width:wp('75%')}}>
                                    <TextInput
                                        ref={(input) => { this.fourthTextInput = input; }}
                                        style={textContainer}
                                        clearButtonMode={'while-editing'}
                                        onChangeText={text => this.onTextChange('username', text)}
                                        value={username}
                                        returnKeyType="next"
                                        onSubmitEditing={() => { this.fifthTextInput.focus(); }}
                                        onFocus={()=>this.handleFocus(REGISTRATION_FIELD.USERNAME)}
                                        blurOnSubmit
                                    />
                                </View>
                            </View>
                            {
                                this.state.empty &&
                                <View style={viewValidation}>
                                    <EntypoIcon name="circle-with-cross" size={27} style={{padding: 10}} color={'red'}/>
                                </View> || !this.state.empty &&
                                <View style={viewValidation}>
                                    <AntIcon name="checkcircleo" size={25} color={'gray'} style={{marginRight: 10}}/>
                                </View>
                            }
                        </View>
                        <View style={[ viewContainer,{marginTop:10,flexDirection:'row'}]}>
                            <View style={[this.state.password.length > 0  && { borderWidth: 1,borderColor:'black'}]}>
                                <Text style={(selectedField === REGISTRATION_FIELD.PASSWORD || fullname !== '') && selectedLabelStyle || labelStyle}>
                                    {'Password'}
                                </Text>
                                <View style={{flexDirection:'row',width:wp('75%')}}>
                                    <TextInput
                                        ref={(input) => { this.fifthTextInput = input; }}
                                        style={textContainer}
                                        secureTextEntry={this.state.status}
                                      //  clearButtonMode={'while-editing'}
                                        onChangeText={text => this.onTextChange('password', text)}
                                        value={password}
                                        returnKeyType="done"
                                        onFocus={()=>this.handleFocus(REGISTRATION_FIELD.PASSWORD)}
                                        blurOnSubmit
                                    />
                                </View>
                                <View style={{width:wp('13%'),alignItems:'center',justifyContent:'center',marginRight:30}}>

                                </View>
                            </View>
                            {

                               this.state.empty &&
                                    <View style={viewValidation}>
                                        {
                                            this.state.empty &&
                                            <EntypoIcon name="circle-with-cross" size={27} style={{padding: 10}}
                                                        color={'red'}/>
                                        }
                                        {
                                            !this.state.empty &&
                                            <Icon name="logo-facebook" size={25} color={'blue'} style={{marginRight: 10}}/>
                                        }
                                    </View> || <View style={{width:wp('13%'),alignItems:'center',justifyContent:'center',marginRight:30}}>
                                    <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                                        {
                                            this.state.status &&
                                            <Text style={{fontWeight:'bold',fontSize:wp('4%')}}>{'Show'}</Text>
                                        }
                                        {
                                            !this.state.status &&
                                            <Text style={{fontWeight:'bold',fontSize:wp('4%')}}>{'Hide'}</Text>
                                        }

                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </View>

                    <View style={{ marginTop: hp('2%')}}>
                        <AppButton
                            title={'Sign Up'}
                            exStyle={{width: wp('90%')}}
                            onPress={this.onPress}
                        />
                    </View>
                    {
                        this.state.empty &&
                        <View style={{
                            width: wp('100%'),
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                            <Text style={{textAlign:'center',color:Constant.color.red,fontSize:20,marginTop:10}}>{'This field is required.'}</Text>
                        </View>
                    }
                    {
                        this.state.validPhone &&
                        <View style={{
                            width: wp('100%'),
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                            <Text style={{textAlign:'center',color:Constant.color.red,fontSize:20,padding: 10}}>
                                {'Looks like your phone number may be incorrect. Please try entering your full number, including the country code.'}
                            </Text>
                        </View>
                    }
                    <View style={viewBottomText}>
                        <Text style={text}>{'By signing up, you agree to our Terms , Data Policy and Cookies Policy .'}</Text>
                    </View>

                    <View style={viewLognbtn}>
                        <Text style={textOnac}>{'Have an account?'}</Text>
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}}
                                      onPress={()=>this.props.navigation.navigate('Login')}>
                            <Text style={textLoginbtn}>{' Log In'}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    viewValidation:{
        width: wp('14%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30
    },
    viewBottomText:{
        height:hp('10%'),
        justifyContent:'center',
        alignItems:'center'
    },
    viewLognbtn:{
        height:hp('9%'),
        justifyContent:'center',
        flexDirection:'row'
    },
    textLoginbtn:{
        marginTop:20,
        fontSize:20,
        color:Constant.color.twitter
    },
    textOnac:{
        marginTop:20,
        fontSize:20,
        color:Constant.color.black
    },
    textContainer: {
        height: 50,
        padding: 10,
        fontSize: 17,
        width: wp('90%'),
         marginLeft:2
    },
    viewContainer:{
        borderWidth: 0.3,
        borderColor: 'gray',
       width:wp('90%'),
    },
    fbButton: {
        width: wp('90%'),
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Constant.color.twitter,
        height: hp('5%'),
    },
    fbText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: Constant.color.white,
    },
    signupText: {
        marginTop: 20,
        fontSize: 20,
        color: Constant.color.twitter,
    },
    text: {
        textAlign: 'center',
        color: Constant.color.darkGray,
        fontSize: wp('4.5%'),
    },
    textMain:{
        textAlign: 'center',
        fontSize: wp('10%'),
        fontFamily: 'TimesNewRomanPS-BoldItalicMT'
    },
    labelStyle: {
        position: 'absolute',
        left: 10,
        top: 15,
        fontSize: 18,
        color: '#aaa',
    },
    selectedLabelStyle: {
        position: 'absolute',
        left: 10,
        top: 3,
        fontSize: 12,
        color: '#aaa',
    },
});
const mapStateToProps = state => {
    const {userData} = state.user;
    return {
        userData,
    };
};

export default connect(
    mapStateToProps,
    {
        setUser,
    },
)(RegistrationBasic);
