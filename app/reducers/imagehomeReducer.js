import {GET_IMAGES_HOME} from '../actions/types';

const INITIAL_STATE = {
    imagesData: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_IMAGES_HOME:
            return {
                ...state,
                imagesData : action.payload,
            };
        default:
            return state;
    }
};
