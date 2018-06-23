import * as Types from './types';

const initialState = {
    action: null,
    open: false,
    percent: 0,
    total: 0,
    url:'',
};

export default function global(state = initialState, action) {
    state.action = action.type;

    switch (action.type) {
        case Types.UPLOAD_SUCCESS:
            return Object.assign({}, state, {
                url: action.url,
            });
        case Types.UPLOAD_FAILD:
            return Object.assign({}, state, {
                error,
        });
        case Types.LOADING_SHOW:
            return Object.assign({}, state, {
                open: true,
                percent: 25,
                total: state.total + 1,
            });
        case Types.LOADING_HIDE:
            return Object.assign({}, state, {
                percent: 60,
                open: state.total - 1 > 0,
                total: state.total - 1,
            });

        default:
            return state;
    }
}
