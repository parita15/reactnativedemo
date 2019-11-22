import React,{Component} from 'react';
import {
    TouchableOpacity,
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView, FlatList, Modal, Alert
} from 'react-native';
import Constant from './../helper/themeHelper';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from './../helper/responsivescreen';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppTouchablehightlight} from '../commom/AppTouchablehighlight';
import {connect} from "react-redux";
import {getimageHome} from "../actions/imageshomeAction";

const DATA=[
    {
        id: 1,
        uri:'dog',
        title: 'dog',
    },
    {
        id: 2,
        uri: 'dog1',
        title: 'dog1',
    },
    {
        id: 3,
        uri: 'dog2',
        title: 'dog2',
    },
    {
        id: 4,
        uri: 'dog3',
        title: 'dog3',
    },
    {
        id: 5,
        uri: 'dog4',
        title: 'dog4',
    },
    {
        id: 6,
        uri: 'dog5',
        title: 'dog5',
    },
    {
        id: 7,
        uri: 'download',
        title: 'download',
    },

];
class userHomeBasic extends Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            result: [],
            modalVisible: false,
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

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    renderHighlight = (item) =>{
        const { uri, id, title } = item;

        return (
            <View style={{marginLeft: 10,alignItems:'center'}} key={id}>
                <TouchableOpacity>
                    <Image style={styles.storyContainer} source={{uri: uri }}/>
                </TouchableOpacity>
                <Text>{title}</Text>
            </View>
        );
    };

   /* renderMain = ({item,index}) =>{
        const {uri} = item;
        return (
            <View style={{justifyContent:'space-between'}} key={index}>
                <TouchableOpacity>
                <Image style={styles.mainContainer} source={{uri: uri }}/>
                </TouchableOpacity>
                </View>
        );
    };*/
    imageselect=({item})=>{
        debugger
        return(

            <View>
                <Image style={{width:wp('33.5%'),
                    height:hp('15%')}}
                       source={{uri:item.image}} />
            </View>

        )

    }
    render(){
        const { viewContainer,subnumberView,
                numberView,mainnumberView,
                followText,viewNumberText,
                text,viewImage,textNumber,
                imageProfile,followButton,subtextNumber,followView,dropbuttonView} = styles;
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={viewContainer}>
                    <View style={{justifyContent:'center',alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                            <Icon name="left" size={25}  style={{marginLeft:15}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={text}>
                            {'Undefined'}
                        </Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems: 'center'}}>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            presentationStyle={'formSheet'}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{marginTop: 22}}>
                                <View >
                                    <View>
                                        <AppTouchablehightlight
                                            title={'Setting'}
                                            icon={ <Icon name="setting" size={40}  />}
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible);
                                                this.props.navigation.navigate('Settings')}}
                                        />
                                    </View>
                                    <View>
                                        <AppTouchablehightlight
                                            title={'Archive'}
                                            icon={<MaterialIcon name="restore-clock" size={40}  />}
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible);
                                                this.props.navigation.navigate('Settings')}}
                                        />
                                        </View>
                                    <View >
                                        <AppTouchablehightlight
                                            title={'Your Activity'}
                                            icon={<MaterialIcon name="progress-clock" size={40}  />}
                                        onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                        this.props.navigation.navigate('Settings')}}
                                        />
                                    </View>
                                    <View >
                                        <AppTouchablehightlight
                                            title={'Name Tag'}
                                            icon={<Icon name="scan1" size={40}  />}
                                        onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                        this.props.navigation.navigate('Settings')}}
                                        />
                                    </View>
                                    <View >
                                        <AppTouchablehightlight
                                            title={'Saved'}
                                            icon={<Icon name="save" size={40}  />}
                                        onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                        this.props.navigation.navigate('Settings')}}
                                        />
                                    </View>
                                    <View >
                                        <AppTouchablehightlight
                                            title={'Close Friends'}
                                            icon={<MaterialIcon name="format-list-bulleted-square" size={40}  />}
                                        onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                        this.props.navigation.navigate('Settings')}}
                                        />
                                    </View>
                                    <View >
                                        <AppTouchablehightlight
                                            title={'Discover People'}
                                            icon={<FeatherIcon name="user-plus" size={40}  />}
                                        onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                        this.props.navigation.navigate('Settings')}}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Modal>
                            <TouchableOpacity onPress={()=>{this.setModalVisible(true)}}>
                                <MaterialIcon name="view-headline" size={25} style={{marginRight:15}} />
                            </TouchableOpacity>
                    </View>


                    </View>

                <View style={{height:hp('100%')}}>

                    <ScrollView indicatorStyle={'white'} >
                        <View style={{height:hp('15%'),flexDirection: 'row'}}>
                            <View style={viewImage}>
                                <Image source={{uri:'dog'}}
                                       style={ imageProfile}/>
                            </View>
                            <View style={mainnumberView}>
                                <View style={numberView}>
                                    <View style={subnumberView}>
                                        <View style={viewNumberText}>
                                            <TouchableOpacity>
                                                <Text style={textNumber}>{'371'}</Text>
                                                <Text style={subtextNumber}>{'posts'}</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                    <View style={subnumberView}>
                                        <View style={viewNumberText}>
                                            <TouchableOpacity>
                                                <Text style={textNumber}>{'14.4K'}</Text>
                                                <Text style={subtextNumber}>{'followers'}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={subnumberView}>
                                        <View style={viewNumberText}>
                                            <TouchableOpacity>
                                                <Text style={textNumber}>{'272'}</Text>
                                                <Text style={subtextNumber}>{'following'}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{height:hp('3%')}}>
                            <Text style={{marginLeft:15,fontWeight:'bold',fontSize:wp('4%')}}>Undefined</Text>
                        </View>
                        <View style={{height:hp('5%')}}>
                            <View style={followView}>
                                <TouchableOpacity style={followButton}>
                                    <Text style={followText}>{'Edit Profile'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{height:hp('12%'),marginLeft:15}}>
                            <ScrollView horizontal={true} indicatorStyle={'white'}>
                                {
                                    DATA.map((obj) => {
                                        return this.renderHighlight(obj)
                                    })
                                }
                            </ScrollView>
                        </View>

                    <View style={{height:hp('5%')}}>
                    </View>
                    <View style={{height:hp('100%')}}>
                        <ScrollView indicatorStyle={'white'}>

                            <FlatList
                                numColumns={3}
                                style={{flex: 1}}
                                data={this.state.result}
                                renderItem={({item})=> this.imageselect({item}) }
                                keyExtractor={item => item.uid}
                            />
                        </ScrollView>
                    </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    viewModalText:{
        borderWidth:0.5,
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderTopColor:'transparent',
        borderBottomColor:Constant.color.lightGray,
        width:wp('100%'),
        justifyContent:'center',marginLeft:15
    },
    viewModal:{
        height:hp('8%'),
        flexDirection:'row',
    },
    dropbuttonView:{
        width:wp('96%'),
        height:hp('5%'),
        marginRight:15
    },
    followView:{
        width:wp('100%'),
        height:hp('5%'),
    },
    subnumberView:{
        width:wp('20%'),
        height:hp('7%')
    },
    numberView:{
        height:hp('7%'),
        width:wp('65%'),
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    mainnumberView:{
        justifyContent:'center',
        height:hp('15%'),
        width:wp('95%')
    },
    subtextNumber:{
        textAlign: 'center',
        fontWeight: 'bold',
        color:Constant.color.lightGray,
        fontSize: wp('4%')
    },
    textNumber:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: wp('5%'),
    },
    imageProfile:{
        borderRadius:77,
        marginTop:10,
        height:hp('12%'),
        width:wp('22%'),
    },
    viewImage:{

        justifyContent:'center',
        alignItems:'center',
        width:wp('30%'),
        height:hp('14%'),
    },
    text:{
        fontWeight:'bold',
        fontSize:wp('7%'),
        textAlign:'center',
        alignItems:'center',
        //marginLeft:50,
        marginTop:8
    },
    mainContainer:{
        width:wp('33.5%'),
        height:hp('15%')
    },
    viewContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderTopColor:'transparent',
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderBottomColor:Constant.color.lightGray,
    },
    followButton: {
        width: wp('95%'),
        marginLeft:10,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        height: hp('3%'),
        borderWidth:0.5,
        borderColor:Constant.color.lightGray
    },
    storyContainer:{
        width:wp('18%'),
        height:hp('9%'),
        borderRadius:100,
    },
    followText: {
        textAlign: 'center',
       fontWeight: 'bold',
        fontSize: 15,
        color: Constant.color.blackColor,
    },
    viewNumberText: {
        height:hp('7%'),
        justifyContent:'center',
        alignItems:'center'
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
        getimageHome
    },
)(userHomeBasic);