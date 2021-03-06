import * as features from './features';
import * as services from './services';

let finalTypes = null;
let finalActions = null;
let finalReducers = null;

function reader(modules) {
    for (const key in modules) {
        if (key !== 'default') {
            const { types, actions, reducers } = modules[key];

            if (types !== undefined && actions !== undefined && reducers !== undefined) {
                finalTypes = Object.assign({}, finalTypes, { [key]: types });
                finalActions = Object.assign({}, finalActions, { [key]: actions });
                finalReducers = Object.assign({}, finalReducers, { [key]: reducers });
            }

            if (types === undefined || actions === undefined || reducers === undefined) {
                reader(modules[key]);
            }
        }
    }
}

reader(features);

export {
    finalTypes as types,
    finalActions as actions,
    finalReducers as reducers,
    services as services
};
