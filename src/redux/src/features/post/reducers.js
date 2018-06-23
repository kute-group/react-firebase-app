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
    },
    loading: false
};

export default function post(state = initialState, action) {
    state.action = action.type;

    switch (action.type) {
        case Types.POST_FETCH:
            return Object.assign({}, state, {
                list: action.list
            });
        case Types.POST_LOADING:
            return Object.assign({}, state, {
            loading: action.loading
        });
        case Types.POST_RESET:
            return Object.assign({}, state, {
                list: null
            });

        case Types.POST_ATTACH:
            return Object.assign({}, state, {
                attach: action.identity
            });

        case Types.POST_CLEAR:
            return Object.assign({}, state, {
                attach: null
            });

        case Types.POST_SAVE:
            return Object.assign({}, state, {
                saveResult: action.post
            });

        case Types.POST_SAVE_FAILD:
            return Object.assign({}, state, {
                saveFaild: action.faild
            });

        case Types.POST_SAVE_ERROR:
            return Object.assign({}, state, {
                saveError: action.error
            });

        case Types.POST_DELETE:
            return Object.assign({}, state, {
                delete: {
                    identity: action.identity,
                    result: action.result
                }
            });

        case Types.POST_DELETE_FAILD:
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
