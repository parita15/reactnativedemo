import {SET_LOGIN} from './types';

export const setLogin = (login) => {
    console.log(login)
    debugger
    return (dispatch, getState) => {
        return fetch('http://localhost:4001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(login)
        }).then(res => {
                debugger
                return dispatch({
                    type: SET_LOGIN,
                    payload: res,
                });
            })
            .catch(e => {
                debugger
                alert(e);
            });
    };
};
