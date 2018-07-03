import * as Types from './types';

const initialState = {
    action: null,
    info: null,
    loading: false
};

export default function post(state = initialState, action) {
    state.action = action.type;
    switch (action.type) {
        case Types.LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                info: action.info
            });
        }
        default:
            return state;
    }
}
