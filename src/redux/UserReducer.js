import * as ActionTypes from './ActionTypes';

export const UserReducer = (state = { jwtToken : null }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_JWT_TOKEN:
            return {...state, jwtToken: action.payload};

            default:
                return state;
    }
};