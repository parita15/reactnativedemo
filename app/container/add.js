import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class AddBasic extends Component{
    constructor(props){
        super(props)
    }

    showImagePicker = () => {
        ImagePicker.openPicker({
            multiple: true,
            maxFiles:5,
            //compressImageQuality:0.4
        }).then(images => {
            console.log(images);
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
