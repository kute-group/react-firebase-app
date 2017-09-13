import * as Types from './types';
import { ApiUrl, FetchHelper } from '../../services';

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

            dispatch(actionTypes.todoFetch(params));
            // FetchHelper.get(
            //     ApiUrl.todo,
            //     params,
            //     undefined,
            //     res => {
            //         dispatch(actionTypes.todoFetch(res));
            //     },
            //     faild => {
            //         dispatch(actionTypes.todoReset(faild || null));
            //     },
            //     error => {
            //         dispatch(actionTypes.todoReset(error || null));
            //     }
            // );
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
        return dispatch => {
            let mappers = [];
            let { todoId } = params;
            let method = !editable ? 'POST' : 'PUT';
            let url = !editable ? ApiUrl.todo : ApiUrl.todo + '/' + todoId;

            FetchHelper.postEncode(
                url,
                method,
                params,
                mappers,
                res => {
                    dispatch(actionTypes.todoSave(res));
                },
                faild => {
                    dispatch(actionTypes.todoSaveFaild(faild));
                },
                error => {
                    dispatch(actionTypes.todoSaveError(error || null));
                }
            );
        };
    },

    deleteTodo(params, identity) {
        return dispatch => {
            let promise = null;
            let mappers = ['todoId'];

            FetchHelper.postEncode(
                ApiUrl.todo + '/' + params.todoId,
                'DELETE',
                params,
                mappers,
                result => {
                    dispatch(actionTypes.todoDelete(result, identity));
                },
                () => {
                    dispatch(actionTypes.todoDeleteFaild(identity));
                },
                () => {
                    dispatch(actionTypes.todoDeleteFaild(identity));
                }
            );

            return promise;
        };
    }
};

//=== ACTION OFFLINE ===
const actionOffline = {};

//=== ACTION FINAL ===
const actionFinal = Object.assign(actionTypes, actionMidlewares, actionOffline);

export default actionFinal;
