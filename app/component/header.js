import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Constant from './../helper/themeHelper';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from './../helper/responsivescreen'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) =>
{
    debugger
    return(
        <View style={styles.header}>
            <View style={styles.viewContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.cameraicon}>
                        <Icon name="camera" size={43} color="black" />
                    </TouchableOpacity>

                    <Text style={styles.text}>{props.title}</Text>

                    <TouchableOpacity style={styles.messageicon}>
                        <Image style={styles.homeimage} source={{uri:"message_icon"}}/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles=StyleSheet.create({
    header:{
        height:hp("7%"),
        backgroundColor:Constant.color.white,
        justifyContent:"center",
    },
    messageicon:{
        width:wp("15%"),
        height:hp("7%"),
        backgroundColor:"white",
        marginLeft:85
    },
    cameraicon:{
        width:wp("15%"),
        height:hp("7%")
    },
    text:{
        fontWeight:"bold",
        fontSize:30,
        textAlign:"center",
        alignItems:"center",
        marginLeft:50,
        marginTop:8
    },
    homeimage:{
        height:hp("5%"),
        width:wp("9%"),
        // marginLeft:wp("1%"),
        marginTop:wp("1%"),
        color:'#aaa'
    }
});

export { Header }