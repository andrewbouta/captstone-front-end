// Not  functional

//import { LOGIN_REQUEST, LOGOUT_REQUEST, SUCCESS, FAILURE } from './authTypes';
import * as AT from './authTypes';
import axios from 'axios';

export const authenticateUser = (userName, password) => {

    const credentials = {
        userName: userName,
        password: password
    };

    return dispatch => {
        dispatch({
            type: AT.LOGIN_REQUEST
        });
        axios.post("http://localhost:8080/", credentials)
            .then(response => {
                let token = response.data.token;
                localStorage.setItem('jwtToken', token);
                dispatch(success(true));
            })
            .catch(error => {
                dispatch(failure());
            });
    };
};

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: AT.LOGOUT_REQUEST
        });
        localStorage.removeItem('jwtToken');
        dispatch(success(false));
    };
};

const success = isLoggedIn => {
    return {
        type: AT.SUCCESS,
        payload: isLoggedIn
    };
};

const failure = () => {
    return {
        type: AT.FAILURE,
        payload: false
    };
};