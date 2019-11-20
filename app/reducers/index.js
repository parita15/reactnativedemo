import {combineReducers} from 'redux';

import User from './userReducer';
import Login from './loginReducer';
import Imageshome from './imagehomeReducer';

const appReducer = combineReducers({
    user: User,
    login: Login,
    imageshome: Imageshome,
});

export default function rootReducer(state, action) {
    return appReducer(state, action);
}
