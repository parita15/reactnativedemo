import {GET_IMAGES_HOME} from './types';

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