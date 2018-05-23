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

export default function project(state = initialState, action) {
  state.action = action.type;

  switch (action.type) {
    case Types.PROJECT_FETCH:
      return Object.assign({}, state, {
        list: action.list
      });

    case Types.PROJECT_RESET:
      return Object.assign({}, state, {
        list: null
      });

    case Types.PROJECT_ATTACH:
      return Object.assign({}, state, {
        attach: action.identity
      });

    case Types.PROJECT_CLEAR:
      return Object.assign({}, state, {
        attach: null
      });

    case Types.PROJECT_SAVE:
      return Object.assign({}, state, {
        saveResult: action.todo
      });

    case Types.PROJECT_SAVE_FAILD:
      return Object.assign({}, state, {
        saveFaild: action.faild
      });

    case Types.PROJECT_SAVE_ERROR:
      return Object.assign({}, state, {
        saveError: action.error
      });

    case Types.PROJECT_DELETE:
      return Object.assign({}, state, {
        delete: {
          identity: action.identity,
          result: action.result
        }
      });

    case Types.PROJECT_DELETE_FAILD:
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
