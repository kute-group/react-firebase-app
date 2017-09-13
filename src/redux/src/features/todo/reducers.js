import * as Types from './types';

const initialState = {
    action: null,
    list: null,
    attach: null,
    saveResult: null,
    saveFaild: null,
    saveError: null,
    delete: {
        identity: null,
        result: null
    }
};

export default function todo(state = initialState, action) {
    state.action = action.type;

    switch (action.type) {
        case Types.TODO_FETCH:
            return Object.assign({}, state, {
                list: action.list
            });

        case Types.TODO_RESET:
            return Object.assign({}, state, {
                list: null
            });

        case Types.TODO_ATTACH:
            return Object.assign({}, state, {
                attach: action.identity
            });

        case Types.TODO_CLEAR:
            return Object.assign({}, state, {
                attach: null
            });

        case Types.TODO_SAVE:
            return Object.assign({}, state, {
                saveResult: action.todo
            });

        case Types.TODO_SAVE_FAILD:
            return Object.assign({}, state, {
                saveFaild: action.faild
            });

        case Types.TODO_SAVE_ERROR:
            return Object.assign({}, state, {
                saveError: action.error
            });

        case Types.TODO_DELETE:
            return Object.assign({}, state, {
                delete: {
                    identity: action.identity,
                    result: action.result
                }
            });

        case Types.TODO_DELETE_FAILD:
            return Object.assign({}, state, {
                delete: {
                    identity: action.identity,
                    result: null
                }
            });

        default:
            return state;
    }
}
