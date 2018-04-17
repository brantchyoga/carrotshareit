import { LIFT_POST_DATA } from '../constants/action-types';

const initialState = {
    postData: null,

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIFT_POST_DATA:
          return {...state, currentPage: action.payload};
        default:
          return state;
    }
}

export default rootReducer;
