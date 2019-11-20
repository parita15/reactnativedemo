import React,{Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import Constant from "../../../../helper/themeHelper";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "../../../../helper/responsivescreen";


export default class YourlistBasic extends Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ''}
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
        const { viewSearch,viewSearchicon,textContainer} = styles;
        const { search }=this.state;
        return(
            <View>
                <KeyboardAvoidingView behavior="padding"  style={{ paddingTop: 20,justifyContent: 'center'}}>
                    <View style={viewSearch}>
                        <View style={ viewSearchicon}>
                            <EvilIcons name="search" size={30} style={{marginLeft: 5}} />
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
                    <View style={{justifyContent:'center',marginLeft:10,height:hp('60%')}}>
                        <Text style={{textAlign:'center',color:Constant.color.lightGray}}>{'Add people to your close friends list to share stories with them'}</Text>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewSearch:{
        width:wp('90%'),
        height:hp('4.5%'),
        flexDirection: 'row',
        borderWidth:0.7,
        marginLeft:15,
        borderRadius:5,
        borderColor:Constant.color.lightGray
    },
    viewSearchicon:{
        height:hp('4.5%'),
        width:wp('15%'),
        alignItems:'flex-start',
        justifyContent:'center'
    },
    textContainer: {
        fontSize: 17,
        width: wp('75%'),
    },
})