import React,{Component} from 'react';
import { View, Text,  StyleSheet} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from '../../../../helper/responsivescreen';


export default class YourlistBasic extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const { viewIcon, textFollower} = styles;
        return(
            <View>
                <View style={viewIcon}>
                    <SimpleLineIcon name={'user-follow'} size={70}/>
                    <Text style={ textFollower}>{'Followers'}</Text>
                    <Text style={{marginTop: 15}}>{'Woull see all the people who follow you here'}</Text>
                </View>
                <View style={{height:hp('3%'),marginLeft:10}}>
                    <Text style={{fontWeight:'700'}}>{'Suggestions for you'}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewIcon:{
        height:hp('25%'),
        alignItems: 'center',
        marginTop: 30
    },
    textFollower:{
        fontSize: wp('8%'),
        marginTop: 25
    },
})