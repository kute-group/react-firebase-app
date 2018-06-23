import * as Types from './types';
import {storage} from '../../firebase';

//=== ACTION TYPES ===
const actionTypes = {
    showNotifi(noti) {
        return {
            type: Types.SHOW_NOTI,
            noti
        };
    },
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
    upLoadSuccess(url) {
        return {
            type: Types.UPLOAD_SUCCESS,
            url
        };
    },
    upLoadFaild() {
        return {
            type: Types.UPLOAD_FAILD,
        };
    },
    
};

//=== ACTION MIDLEWARES ===
const actionMidlewares = {
    showNoti(noti) {
        return dispatch => {
            dispatch(actionTypes.showNotifi(noti));
        };
    },
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

    upLoad(file) {
        return dispatch => {
            const guestsRef = storage.ref();
            const name = (+new Date()) + '-' + file.name;
            const metadata = {
                contentType: file.type
            };
            const task = guestsRef.child(name).put(file, metadata);
            task.then((snapshot) => {
                const url = snapshot.downloadURL;
                dispatch(actionTypes.upLoadSuccess(url));
            }).catch((error) => {
                dispatch(actionTypes.upLoadFaild({ error }));
            });

        };
    },
};

//=== ACTION OFFLINE ===
const actionOffline = {};

//=== ACTION FINAL ===
const actionFinal = Object.assign(actionTypes, actionMidlewares, actionOffline);

export default actionFinal;
