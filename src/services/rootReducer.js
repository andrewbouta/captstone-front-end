import { combineReducers } from 'redux';
import userReducer from './userService/userReducer';
import authReducer from './authenticationService/authReducer';


const rootReducer = combineReducers ({
    user: userReducer,
    auth: authReducer
});

export default rootReducer;