import React,{Component} from 'react';
import {
    Alert,
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    AsyncStorage,
    TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from './../helper/responsivescreen';
import {AppButton} from './../commom/AppButton';
import Constant from './../helper/themeHelper';
import Icon from 'react-native-vector-icons/Ionicons';
import {isValidUserName} from '../helper/appHelper';
import {isValidPassword} from '../helper/appHelper';
import {connect} from 'react-redux';
import {setLogin} from '../actions/loginAction';


const LOGIN_FIELD = {
    USERNAME: 'username',
    PASSWORD: 'password',
};

class LoginBasic extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            selectedField: '',
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
    onCheck=()=>{
        debugger
        const {username,password} = this.state;
        let login = {
            username: username,
            password: password,
        };
        if (!isValidUserName(username)){
            Alert.alert('Failed','Please enter valid username and username should not be less than 5 character','OK');
        }
        else if (!isValidPassword(password)){
            Alert.alert('Failed','Password should be of 8 character containing letter,digits,@ and #','OK');
        }
        this.props.setLogin(login).then((res) => {
            debugger;
            console.log(res);
            if (res.payload.status === 400){
                this.setState({
                    username: '',
                    password: '',
                });
                alert ('username and password is invalid');
            }
            else {
                AsyncStorage.setItem('login', JSON.stringify(login));
                debugger
                this.props.navigation.navigate('Main');
            }

        }).catch((err) => {
            console.log(err);
        })
    }

    onTextChange = (key, value) => {
        this.setState({
            [key]: value,
        });
    };

    handleFocus = (selectedField) => {
        this.setState({ selectedField });
    };

    render(){
        const {username, password, selectedField} = this.state;
        const { labelStyle,
                selectedLabelStyle,
                textContent,
                viewContainer,
                textContainer,
                subtextContent,
                textAcContainer,
                textSignupContent} = styles;
        return (
            <SafeAreaView style={{flex:1}}>
                <KeyboardAvoidingView behavior="padding"  style={{ paddingTop: 20,justifyContent: 'center'}}>
                    <View>
                        <View style={{height:hp('15%'),justifyContent:'center'}}>
                            <Text style={textContent}>{'Instagram'}</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center',marginTop: 10}}>
                            <View style={viewContainer}>
                                <Text style={(selectedField === LOGIN_FIELD.USERNAME || username !== '') && selectedLabelStyle || labelStyle}>
                                    {'Username'}
                                </Text>
                                <TextInput
                                    style={textContainer}
                                    //  placeholder={'Phone Number,username or email'
                                    clearButtonMode={'while-editing'}
                                    onChangeText={text => this.onTextChange('username', text)}
                                    value={username}
                                    returnKeyType="next"
                                    onSubmitEditing={() => { this.firstTextInput.focus(); }}
                                    onFocus={()=>this.handleFocus(LOGIN_FIELD.USERNAME)}
                                    blurOnSubmit
                                />
                            </View>
                            <View style={[viewContainer,{marginTop:10,flexDirection: 'row'}]}>
                                <Text style={(selectedField === LOGIN_FIELD.PASSWORD || password !== '') && selectedLabelStyle || labelStyle}>
                                    {'Password'}
                                </Text>
                                <View style={{flexDirection:'row', width:wp('76%') }}>

                                    <TextInput
                                        ref={(input) => { this.firstTextInput = input; }}
                                        style={[textContainer,{width:wp('75%')}]}
                                        secureTextEntry={this.state.status}
                                        //placeholder={'Password'}
                                        //clearButtonMode={'while-editing'}
                                        onChangeText={text => this.onTextChange('password', text)}
                                        value={password}
                                        returnKeyType="done"
                                        onFocus={()=>this.handleFocus(LOGIN_FIELD.PASSWORD)}
                                        blurOnSubmit>
                                    </TextInput>
                                </View>
                                <View style={{width:wp('13%'),alignItems:'center',justifyContent:'center',marginRight:30}}>
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
                            </View>
                        </View>

                        <View style={{ marginTop: hp('2%')}}>
                            <AppButton
                                title={'Log In'}
                                exStyle={{width: wp('90%')}}
                                onPress={this.onCheck}

                            />
                        </View>

                        <View style={{height: hp('5%'), justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: wp('5%'),
                                color: Constant.color.lightGray,
                                textAlign: 'center'
                            }}>{"----------------   OR   ------------------"}</Text>
                        </View>
                        <View style={{height:hp('4%'),justifyContent:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}}>
                                <Icon name="logo-facebook" size={25} color={'blue'} style={{marginRight:10}}/>
                                <Text style={[subtextContent,{fontWeight:'bold'}]}>{'Log in with facebook'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{height:hp('7%'),justifyContent:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('Forgetpass')}>
                                <Text style={subtextContent}>{'Forgot Password?'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{height:hp('9%'),justifyContent:'center',flexDirection:'row'}}>
                            <Text style={textAcContainer}>{'Do u have an account?'}</Text>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}}
                                              onPress={()=>this.props.navigation.navigate('Registration')}>
                                <Text style={textSignupContent}>{' Sign Up'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
    textSignupContent:{
        marginTop:20,
        fontSize:20,
        color:Constant.color.twitter
    },
    textAcContainer:{
        marginTop:20,
        fontSize:20,
        color:Constant.color.black
    },
    textContainer: {
        //  borderWidth: 1,
        height: 50,
        borderColor: 'gray',
        paddingHorizontal: 10,
        fontSize: 17,
        //width:wp("70%"),
        //  marginLeft:30
    },
    viewContainer:{
        borderWidth: 1,
        borderColor:Constant.color.lightGray,
        width:wp("90%")
    },
    textContent:{
        textAlign:'center',
        fontSize:45,
        fontFamily:'TimesNewRomanPS-BoldItalicMT'
    },
    subtextContent:{
        textAlign:'center',
        fontSize:wp("5%"),
        color:Constant.color.blue
    },
    labelStyle: {
        position: 'absolute',
        left: 10,
        top: 15,
        fontSize: 20,
        color: '#aaa',
    },
    selectedLabelStyle: {
        position: 'absolute',
        left: 10,
        top: 0,
        fontSize: 14,
        color: '#aaa',
    },
});

const mapStateToProps = state => {
    const {userData} = state.user;
    debugger
    return {
        userData,
    };
};

export default connect(
    mapStateToProps,
    {
        setLogin,
    },
)(LoginBasic);