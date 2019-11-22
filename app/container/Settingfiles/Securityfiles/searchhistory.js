import React,{Component} from 'react';
import {SafeAreaView, View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../helper/responsivescreen'
import Icon from 'react-native-vector-icons/AntDesign';
import Constant from '../../../helper/themeHelper'



export default class SearchhistoryBasic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {viewContainer, text,textHistorty} = styles;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={viewContainer}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="left" size={25} style={{marginLeft: 5}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: wp('80%')}}>
                        <Text style={text}>
                            {'Search History'}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={textHistorty}>
                        {'No search history'}
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    textHistorty:{
        marginLeft:15,
        marginTop:20,
        fontSize: wp('6%'),
        color:Constant.color.lightGray
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
