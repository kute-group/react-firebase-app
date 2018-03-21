import * as Types from './types';
import { actions as globalAction } from '../global';
import { ApiUrl, FetchHelper } from '../../services';
import firebase from '../../firebase';

//=== ACTION TYPES ===
const actionTypes = {
    todoFetch(list) {
        return {
            type: Types.TODO_FETCH,
            list
        };
    },
    todoReset() {
        return {
            type: Types.TODO_RESET
        };
    },
    todoAttach(identity) {
        return {
            type: Types.TODO_ATTACH,
            identity
        };
    },
    todoClear() {
        return {
            type: Types.TODO_CLEAR
        };
    },

    todoSave(todo) {
        return {
            type: Types.TODO_SAVE,
            todo
        };
    },

    todoSaveFaild(faild) {
        return {
            type: Types.TODO_SAVE_FAILD,
            faild
        };
    },

    todoSaveError(error) {
        return {
            type: Types.TODO_SAVE_ERROR,
            error
        };
    },

    todoDelete(result, identity) {
        return {
            type: Types.TODO_DELETE,
            result,
            identity
        };
    },

    todoDeleteFaild(identity) {
        return {
            type: Types.TODO_DELETE_FAILD,
            identity
        };
    }
};

//=== ACTION MIDLEWARES ===
const actionMidlewares = {
    fetchTodo(params) {
        return dispatch => {
            dispatch(globalAction.loadingShow());
            firebase.ref('/songs').once('value', snap => {
                const invite = snap.val();
                dispatch(actionTypes.todoFetch(invite));
                dispatch(globalAction.loadingHide());
            }).catch((error) => {
                dispatch(actionTypes.todoReset(error));
            });
        };
    },

    initTodo(params) {
        return dispatch => {
            const { todoId } = params;

            FetchHelper.get(
                ApiUrl.todo + '/' + todoId,
                {},
                undefined,
                res => {
                    dispatch(actionTypes.todoAttach(res));
                },
                () => {
                    dispatch(actionTypes.todoClear());
                },
                () => {
                    dispatch(actionTypes.todoClear());
                }
            );
        };
    },

    saveTodo(params, editable) {
        console.log(params, 'params');
        return dispatch => {
            let { todoId, title, author } = params;
            let url = !editable ? '/songs' : '/songs/' + todoId;

            const guestsRef = firebase.ref(url);
            if (editable) {
                guestsRef.update({
                    title,
                    author
                }).then(() => {
                    dispatch(actionTypes.todoSave({ title, author }));
                }).catch((error) => {
                    dispatch(actionTypes.todoSaveFaild(error));
                });
            } else {
                guestsRef.push({
                    title,
                    author
                }).then(() => {
                    dispatch(actionTypes.todoSave({ title, author }));
                }).catch((error) => {
                    dispatch(actionTypes.todoSaveFaild(error));
                });
            }

        };
    },

    deleteTodo(todoId) {
        return dispatch => {
            let url = '/songs/' + todoId;
            const guestsRef = firebase.ref(url);
            guestsRef.remove().then(() => {
                dispatch(actionTypes.todoDelete());
            }).catch((error) => {
                dispatch(actionTypes.todoDeleteFaild(error));
            });
        };
    }
};

//=== ACTION OFFLINE ===
const actionOffline = {};

//=== ACTION FINAL ===
const actionFinal = Object.assign(actionTypes, actionMidlewares, actionOffline);

export default actionFinal;
