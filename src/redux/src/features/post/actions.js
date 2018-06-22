import * as Types from './types';
import { actions as globalAction } from '../global';
import { ApiUrl, FetchHelper } from '../../services';
import firebase from '../../firebase';
import axios from 'axios';

//=== ACTION TYPES ===
const actionTypes = {
    postFetch(list) {
        return {
            type: Types.POST_FETCH,
            list
        };
    },
    postReset() {
        return {
            type: Types.POST_RESET
        };
    },
    postAttach(identity) {
        return {
            type: Types.POST_ATTACH,
            identity
        };
    },
    postClear() {
        return {
            type: Types.POST_CLEAR
        };
    },

    postSave(post) {
        return {
            type: Types.POST_SAVE,
            post
        };
    },

    postSaveFaild(faild) {
        return {
            type: Types.POST_SAVE_FAILD,
            faild
        };
    },

    postSaveError(error) {
        return {
            type: Types.POST_SAVE_ERROR,
            error
        };
    },

    postDelete(result, identity) {
        return {
            type: Types.POST_DELETE,
            result,
            identity
        };
    },

    postDeleteFaild(identity) {
        return {
            type: Types.POST_DELETE_FAILD,
            identity
        };
    }
};


//=== ACTION MIDLEWARES ===
const actionMidlewares = {
    fetchPost(params) {
        return dispatch => {
            dispatch(globalAction.loadingShow());
            firebase.ref('/posts').once('value', snap => {
                var returnArr = [];

                snap.forEach(function (childSnapshot) {
                    if (childSnapshot.val() !== 1) {
                        var item = childSnapshot.val();
                        item.key = childSnapshot.key;

                        returnArr.push(item);
                    }

                });
                dispatch(actionTypes.postFetch(returnArr));
                dispatch(globalAction.loadingHide());
            }).catch((error) => {
                dispatch(actionTypes.postReset(error));
            });
        };
    },

    initPost(params) {
        return dispatch => {
            const { postId } = params;

            FetchHelper.get(
                ApiUrl.post + '/' + postId,
                {},
                undefined,
                res => {
                    dispatch(actionTypes.postAttach(res));
                },
                () => {
                    dispatch(actionTypes.postClear());
                },
                () => {
                    dispatch(actionTypes.postClear());
                }
            );
        };
    },

    savePost(params, editable) {
        console.log(params, 'params');
        return dispatch => {
            let { postId, title, author } = params;
            let url = !editable ? '/posts' : '/posts/' + postId;

            const guestsRef = firebase.ref(url);
            if (editable) {
                guestsRef.update({
                    title,
                    author
                }).then(() => {
                    dispatch(actionTypes.postSave({ title, author }));
                }).catch((error) => {
                    dispatch(actionTypes.postSaveFaild(error));
                });
            } else {
                guestsRef.push({
                    title,
                    author
                }).then(() => {
                    dispatch(actionTypes.postSave({ title, author }));
                }).catch((error) => {
                    dispatch(actionTypes.postSaveFaild(error));
                });
            }

        };
    },

    deletePost(postId) {
        return dispatch => {
            let url = '/posts/' + postId;
            const guestsRef = firebase.ref(url);
            guestsRef.remove().then(() => {
                dispatch(actionTypes.postDelete());
            }).catch((error) => {
                dispatch(actionTypes.postDeleteFaild(error));
            });
        };
    },

    addGoogleSheet() {

        return dispatch => {
            let url = 'https://script.google.com/macros/s/AKfycbz1mmHFNZNMREv58N0F2nZWEPqYXJsEUPl52FxVySVC0Io9M_s/exec';
            const params = {
                data: 'Hợp',
            };
            const request = {
                customerID: '2222',
                username: '333'
            };
            const { customerID, username } = request;
            return axios({
                method: 'post',
                url,
                params: {
                    customerID,
                    username,
                }
            });

        };
    }
};

//=== ACTION OFFLINE ===
const actionOffline = {};

//=== ACTION FINAL ===
const actionFinal = Object.assign(actionTypes, actionMidlewares, actionOffline);

export default actionFinal;
