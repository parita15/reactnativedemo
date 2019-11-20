import React,{Component} from 'react';
import {Image,
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity,TouchableHighlight} from 'react-native';
import {heightPercentageToDP as hp,
    widthPercentageToDP as wp} from '../helper/responsivescreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import CameIcon from 'react-native-vector-icons/SimpleLineIcons';
import {connect} from "react-redux";
import {getimageHome} from "../actions/imageshomeAction";

let item =[];
const DATA=[
    {
        id: 1,
        uri:"dog"
    },
    {
        id: 2,
        uri: "dog1"
    },
    {
        id: 3,
        uri: "dog2"
    },
    {
        id: 4,
        uri: "dog3"
    },
    {
        id: 5,
        uri: "dog4"
    },
    {
        id: 6,
        uri: "dog5"
    },
    {
        id: 7,
        uri: "download"
    },

];
class Mainbasic extends Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            result: []
        }
    }

    componentWillMount(): void {
        this.props.getimageHome().then((response) => {
            debugger
            this.setState({
                result: response.payload.result
            })
            debugger
        }).catch((e) => {
            debugger
        })
    }

    renderHeaderItem = (item) =>{
        const { uri, id } = item;

        return (
            <View style={{marginLeft: 10,alignItems:"center"}} key={id}>
                <TouchableOpacity>
                    <Image style={styles.storyContainer} source={{uri: uri }}/>
                </TouchableOpacity>
            </View>
        );
    };
    /*renderMain = ({item,index}) =>{

        return (
            <View style={{justifyContent:'space-between'}} key={index}>
                <Image style={styles.mainContainer} source={{uri:imagearray[0]}}/>
                <View style={styles. likeCommentImageContanier}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                        <Icon name="heart-o" size={35}  style={{padding:6}}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="comment-o" size={35}  style={{padding:4}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.likeCommentContanier}>
                    <Icon name="heart" size={25}  style={{padding:5}} />
                        <Text style={{fontWeight:"bold",fontSize:15,marginTop:5}}>Likes</Text>
                </View>

            </View>
        );
    };*/
    imageselect=({item})=>{
        debugger
        return(

                <View>
                    <Image style={{height: 500, width: 400}}
                           source={{uri:item.image}} />
                </View>

        )

    }
    render(){

        return(
                <SafeAreaView>
                    <View style={styles.viewContainer}>
                        <TouchableOpacity style={styles.cameraicon}>
                            <CameIcon name="camera" size={43} color="grey" />
                        </TouchableOpacity>
                        <Text style={styles.text}>
                            {'Instagram'}
                            </Text>
                        <TouchableOpacity style={styles.messageicon}>
                            <Image style={styles.homeimage}
                                   source={{uri:'message_icon'}} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={{height:hp('10%')}}>
                                <ScrollView horizontal={true} indicatorStyle={'white'}>
                                    {
                                        DATA.map((obj) => {
                                            return this.renderHeaderItem(obj)
                                        })
                                    }
                                </ScrollView>
                        </View>
                        <View style={{height:hp('70%')}}>
                            <ScrollView indicatorStyle={'white'}>
                            <FlatList
                                style={{flex: 1}}
                                data={this.state.result}
                                renderItem={({item})=> this.imageselect({item}) }
                                keyExtractor={item => item.uid}
                                    />
                            </ScrollView>
                        </View>
                    </ScrollView>
                </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    likeCommentImageContanier: {
        height: hp('6%'),
        flexDirection: 'row',
        borderBottomWidth: 1,
    },
    likeCommentContanier:{
        height:hp('20%'),
        flexDirection:'row',
        borderBottomWidth:1,
    },
    storyContainer:{
        width:wp('18%'),
        height:hp('9%'),
        borderRadius:100,
    },
    mainContainer:{
        width:wp('100%'),
        height:hp('40%')
    },
    viewContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    messageicon:{
        width:wp('15%'),
        height:hp('7%'),
        backgroundColor:'white',

    },
    cameraicon:{
        width:wp("15%"),
        height:hp("7%"),
        padding:3
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
        marginTop:wp("1%")
    }
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
        getimageHome
    },
)(Mainbasic);

