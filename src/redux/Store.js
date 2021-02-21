import { combineReducers, appplyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialSignOn } from './SignOnForms';
import { createForms } from 'react-redux-form';
import { UserReducer } from './UserReducer';

export const Store = () => {
    const store = createStore(
        combineReducers({
            UserReducer,
            ... createForms({ // creating a model
                signOn: InitialSignOn
            })}),
        appplyMiddleware(thunk, logger)
    );
    return store;
}
