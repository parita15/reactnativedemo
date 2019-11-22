import {GET_IMAGES_HOME,SET_IMAGES_HOME} from './types';

export const getimageHome=()=> {
    const data = new FormData();
    console.log('In action')
    return (dispatch, getState) => {
        return fetch('http://localhost:4001/imageshome', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(res => {
                debugger
                return dispatch({
                    type: GET_IMAGES_HOME,
                    payload: res,
                });
            })
            .catch(e => {
                debugger
                alert(e);
            });
    };
}

export const setimageHome=(imageobj)=> {
    debugger
    const data = new FormData();
    console.log('In action')
  //  console.log(image[0])
    debugger
    data.append('iid',imageobj.iid);
    data.append('name',imageobj.name);
    imageobj.image.map(obj=>{
        data.append('image',obj);
    });
    data.append('id',imageobj.id);
    debugger
    return (dispatch, getState) => {
        return fetch('http://localhost:4001/imageshome/api/upload', {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            },
            body: JSON.stringify(imageobj)
        })
            .then(response => response.json())
            .then(res => {
                debugger
                return dispatch({
                    type: SET_IMAGES_HOME,
                    payload: res,
                });
            })
            .catch(e => {
                debugger
                alert(e);
            });
    };
}