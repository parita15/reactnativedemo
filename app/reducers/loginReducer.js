import {SET_LOGIN} from '../actions/types';

const INITIAL_STATE = {
    loginData: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOGIN:
            debugger
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
};
