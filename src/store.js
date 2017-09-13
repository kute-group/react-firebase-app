//=== import the common packages ===
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
//=== import internal ===

const { reducers } = global.REDUX;
let enhancer = compose(applyMiddleware(thunk));

if (process.env.NODE_ENV === 'development') {
    enhancer = compose(applyMiddleware(thunk));
}

class store {
    constructor() {
        // create new store to apply in system
        const store = createStore(
            combineReducers({
                // combine all reducers and apply for this store
                ...reducers,
                routing
            }),
            enhancer
        );
        return store;
    }
}
// export this class to apply in index.js
export default new store();
