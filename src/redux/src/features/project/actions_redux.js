import * as Types from './types';
import { ApiUrl, FetchHelper } from '../../services';

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
            FetchHelper.get(
                ApiUrl.project,
                params,
                undefined,
                res => {
                    dispatch(actionTypes.projectFetch(res));
                },
                faild => {
                    dispatch(actionTypes.projectReset(faild || null));
                },
                error => {
                    dispatch(actionTypes.projectReset(error || null));
                }
            );
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
            let mappers = [];
            let { projectId } = params;
            let method = !editable ? 'POST' : 'PUT';
            let url = !editable ? ApiUrl.project : ApiUrl.project + '/' + projectId;

            FetchHelper.postEncode(
                url,
                method,
                params,
                mappers,
                res => {
                    dispatch(actionTypes.projectSave(res));
                },
                faild => {
                    dispatch(actionTypes.projectSaveFaild(faild));
                },
                error => {
                    dispatch(actionTypes.projectSaveError(error || null));
                }
            );
        };
    },

    deleteProject(params, identity) {
        return dispatch => {
            let promise = null;
            let mappers = ['projectId'];

            FetchHelper.postEncode(
                ApiUrl.project + '/' + params.projectId,
                'DELETE',
                params,
                mappers,
                result => {
                    dispatch(actionTypes.projectDelete(result, identity));
                },
                () => {
                    dispatch(actionTypes.projectDeleteFaild(identity));
                },
                () => {
                    dispatch(actionTypes.projectDeleteFaild(identity));
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
