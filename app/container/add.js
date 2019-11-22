import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {connect} from "react-redux";
import {setUser} from "../actions/userAction";
import {setimageHome} from "../actions/imageshomeAction";

export default class AddBasic extends Component{
    constructor(props){
        super(props)
        this.state={
            iid:'',
            name:'',
            image:'',
            id:'',
        }

    }
    onPress = () => {
        debugger
        const {iid,name,image,id} = this.state
        let imageobj = {
            iid:iid,
            name:name,
            image:image,
            id:id,
        };
        this.props.setImage(imageobj)
    }
        showImagePicker = () => {
        debugger
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            debugger
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {

            }
        });
    }

    render(){
        return (
            <View style={{flex:1,backgroundColor:'lightblue',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{'add page navigation'}</Text>
                <TouchableOpacity onPress={this.showImagePicker.bind(this)} underlayColor="transparent">
                    <Image style={{height: 50, width: 50}}
                           source={{uri:'appicon'}}/>
                </TouchableOpacity>
            </View>
        );
    }
}
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
        setimageHome
    },
)(Mainbasic);


