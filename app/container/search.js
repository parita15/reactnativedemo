import React,{Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    TextInput,
    View,
    Button,
    Text,
    TouchableOpacity, ScrollView
} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from './../helper/responsivescreen';
import AppNavigator from './../navigation/searchTopNavigation';
import {createAppContainer} from 'react-navigation';

import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppIndex = createAppContainer(AppNavigator);
export default class Searchbasic extends Component{

    constructor(props){
        super(props);
    }
    renderItem = ({item,index}) => {
        const {title} = item;
        return (
            <View key={index} style={{padding: 10}}>
                <Text>{title}</Text>
            </View>
        );
    };
    render(){
        const {productData} = this.props;
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={styles.viewContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <EvilIcon name="search" size={25} style={{padding: 10}}/>
                        </TouchableOpacity>
                        <TextInput style={styles.searchContainer} placeholder={'Search'} clearButtonMode={'while-editing'}/>
                    </View>
                </View>
                <View style={{height:hp("6%")}}>
                    <ScrollView horizontal={true} style={{padding:10}}>
                            <View style={styles.subitemView}>
                                <TouchableOpacity style={{padding:5}}>
                                    <Text style={styles.subitemText}>{"IGTV"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.subitemView}>
                                <TouchableOpacity style={{padding:5,flexDirection: 'row'}}>
                                    <Icon name="shopping-bag" size={19}/>
                                    <Text style={styles.subitemText}>{"Shop"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.subitemView}>
                                <TouchableOpacity style={{padding:5}}>
                                    <Text style={styles.subitemText}>{"Food"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.subitemView}>
                                <TouchableOpacity style={{padding:5}}>
                                    <Text style={styles.subitemText}>{"Art"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.subitemView}>
                                <TouchableOpacity style={{padding:5}}>
                                    <Text style={styles.subitemText}>{"Travel"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.subitemView}>
                                <TouchableOpacity style={{padding:5}}>
                                    <Text style={styles.subitemText}>{"IGTV"}</Text>
                                </TouchableOpacity>
                            </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    searchContainer:{
        fontSize:20,
        marginLeft:10,
        height:hp("4%"),
        width:wp("95%"),
        borderColor:"black"

    },
    viewContainer:{
       // flex: 1,
      //  borderWidth: 1,
        backgroundColor:"lightgrey",
        flexDirection: 'row',
        marginLeft:10,
        marginRight:10,
        height:hp("4%"),
        width:wp("95%")
    },
    homeimage:{
        height:hp("5%"),
        width:wp("9%"),
        // marginLeft:wp("1%"),
        marginTop:wp("1%")
    },
    cancleButton:{
        fontSize: 25,

        textAlign:"center",
        paddingTop:5,
        marginLeft:10
    },
    container:{
        flex: 1,
    },
    subitemView:{
        height:hp('3.5%'),
        backgroundColor: 'white',
        marginLeft: 10,
        borderRadius:5,
        borderWidth:1,
        borderColor: 'lightgrey'
    },
    subitemText:{
        fontSize:17,
        textAlign: 'center',
    }
});


