import * as Types from './types';
import { ApiUrl, FetchHelper } from '../../services';
import { auth } from '../../firebase';
import axios from 'axios';

//=== ACTION TYPES ===
const actionTypes = {
    loginSuccess(info) {
        return {
            info,
            type: Types.LOGIN_SUCCESS,
        };
    },

    loginFaild(error) {
        return {
            error,
            type: Types.LOGIN_FAILD,
        };
    },

    registerSuccess(info) {
        return {
            info,
            type: Types.REGISTER_SUCCESS,
        };
    },

    registerFaild(error) {
        return {
            error,
            type: Types.REGISTER_FAILD,
        };
    },
};


//=== ACTION MIDLEWARES ===
const actionMidlewares = {
    login(params) {
        const { username, password } =  params;
        return dispatch => {
            auth.signInWithEmailAndPassword(username, password).then((result) => {
                console.log(result,'result');
                dispatch(actionTypes.loginSuccess(params));
            }).catch((error) => {
                console.log(error,'error');
                dispatch(actionTypes.loginFaild(error));
            });
        };
    }
};

//=== ACTION OFFLINE ===
const actionOffline = {};

//=== ACTION FINAL ===
const actionFinal = Object.assign(actionTypes, actionMidlewares, actionOffline);

export default actionFinal;
