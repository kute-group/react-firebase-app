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

export default function USER(state = initialState, action) {
    state.action = action.type;

    switch (action.type) {
        case Types.USER_FETCH:
            return Object.assign({}, state, {
                list: action.list
            });

        case Types.USER_RESET:
            return Object.assign({}, state, {
                list: null
            });

        case Types.USER_ATTACH:
            return Object.assign({}, state, {
                attach: action.identity
            });

        case Types.USER_CLEAR:
            return Object.assign({}, state, {
                attach: null
            });

        case Types.USER_SAVE:
            return Object.assign({}, state, {
                saveResult: action.USER
            });

        case Types.USER_SAVE_FAILD:
            return Object.assign({}, state, {
                saveFaild: action.faild
            });

        case Types.USER_SAVE_ERROR:
            return Object.assign({}, state, {
                saveError: action.error
            });

        case Types.USER_DELETE:
            return Object.assign({}, state, {
                delete: {
                    identity: action.identity,
                    result: action.result
                }
            });

        case Types.USER_DELETE_FAILD:
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
