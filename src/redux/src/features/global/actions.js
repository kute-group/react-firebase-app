import * as Types from './types';

//=== ACTION TYPES ===
const actionTypes = {
    loadingShow() {
        return {
            type: Types.LOADING_SHOW,
        };
    },
    loadingHide() {
        return {
            type: Types.LOADING_HIDE,
        };
    },
};

//=== ACTION MIDLEWARES ===
const actionMidlewares = {
    showLoading() {
        return dispatch => {
            dispatch(actionTypes.loadingShow());
        };
    },
    hideLoading() {
        return dispatch => {
            dispatch(actionTypes.loadingHide());
        };
    },
};

//=== ACTION OFFLINE ===
const actionOffline = {};

//=== ACTION FINAL ===
const actionFinal = Object.assign(actionTypes, actionMidlewares, actionOffline);

export default actionFinal;
