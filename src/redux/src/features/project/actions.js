import * as Types from './types';
import { actions as globalAction } from '../global';
import { ApiUrl, FetchHelper } from '../../services';
import firebase from '../../firebase';

//=== ACTION TYPES ===
const actionTypes = {
  projectFetch(list) {
    return {
      type: Types.PROJECT_FETCH,
      list
    };
  },
  projectReset() {
    return {
      type: Types.PROJECT_RESET
    };
  },
  projectAttach(identity) {
    return {
      type: Types.PROJECT_ATTACH,
      identity
    };
  },
  projectClear() {
    return {
      type: Types.PROJECT_CLEAR
    };
  },

  projectSave(project) {
    return {
      type: Types.PROJECT_SAVE,
      project
    };
  },

  projectSaveFaild(faild) {
    return {
      type: Types.PROJECT_SAVE_FAILD,
      faild
    };
  },

  projectSaveError(error) {
    return {
      type: Types.PROJECT_SAVE_ERROR,
      error
    };
  },

  projectDelete(result, identity) {
    return {
      type: Types.PROJECT_DELETE,
      result,
      identity
    };
  },

  projectDeleteFaild(identity) {
    return {
      type: Types.PROJECT_DELETE_FAILD,
      identity
    };
  }
};

//=== ACTION MIDLEWARES ===
const actionMidlewares = {
  fetchProject(params) {
    return dispatch => {
      dispatch(globalAction.loadingShow());
      firebase
        .ref('/projects')
        .once('value', snap => {
          const invite = snap.val();
          console.log(invite, 'invite');
          dispatch(actionTypes.projectFetch(invite));
          dispatch(globalAction.loadingHide());
        })
        .catch(error => {
          dispatch(actionTypes.projectReset(error));
        });
    };
  },

  initProject(params) {
    return dispatch => {
      const { projectId } = params;

      FetchHelper.get(
        ApiUrl.project + '/' + projectId,
        {},
        undefined,
        res => {
          dispatch(actionTypes.projectAttach(res));
        },
        () => {
          dispatch(actionTypes.projectClear());
        },
        () => {
          dispatch(actionTypes.projectClear());
        }
      );
    };
  },

  saveProject(params, editable) {
    return dispatch => {
      let { projectId, title, author } = params;
      let url = !editable ? '/projects' : '/projects/' + projectId;

      const guestsRef = firebase.ref(url);
      if (editable) {
        guestsRef
          .update({
            title,
            author
          })
          .then(() => {
            dispatch(actionTypes.projectSave({ title, author }));
          })
          .catch(error => {
            dispatch(actionTypes.projectSaveFaild(error));
          });
      } else {
        guestsRef
          .push({
            title,
            author
          })
          .then(() => {
            dispatch(actionTypes.projectSave({ title, author }));
          })
          .catch(error => {
            dispatch(actionTypes.projectSaveFaild(error));
          });
      }
    };
  },

  deleteProject(projectId) {
    return dispatch => {
      let url = '/projects/' + projectId;
      const guestsRef = firebase.ref(url);
      guestsRef
        .remove()
        .then(() => {
          dispatch(actionTypes.projectDelete());
        })
        .catch(error => {
          dispatch(actionTypes.projectDeleteFaild(error));
        });
    };
  }
};

//=== ACTION OFFLINE ===
const actionOffline = {};

//=== ACTION FINAL ===
const actionFinal = Object.assign(actionTypes, actionMidlewares, actionOffline);

export default actionFinal;
