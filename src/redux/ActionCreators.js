import { baseURL } from '../shared/baseURL';
import * as ActionTypes from './ActionTypes';

export const addJWTToken = (token) => ({
    type: ActionTypes.ADD_JWT_TOKEN, // this ActionType saves the token to the Store.js 
    payload: token
});

export const postSignOn = (username, password) => (dispatch) => {

    const newSignOn = {
        username: username,
        password: password
    };

    return fetch(baseURL + 'authenticate', {
        method: "POST",
        body: JSON.stringify(newSignOn),
        headers: {
            "Content-Type": "application/json"
        }, 
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error ('ERROR: ' + response.status + '... ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addJWTToken(response))) // stores token
    .catch(error => { console.log('Post comments error', error.message); alert('Sign on failed.' + error.statusText)});
};
