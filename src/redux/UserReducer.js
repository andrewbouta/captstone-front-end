import * as ActionTypes from './ActionTypes';

// supports the action of getting the token and saves it

export const UserReducer = (state = { jwtToken : null }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_JWT_TOKEN:
            return {...state, jwtToken: action.payload};

            default:
                return state;
    }
};