import * as Types from './types';
import { ApiUrl, FetchHelper } from '../../services';
import firebase from '../../firebase';
import axios from 'axios';

//=== ACTION TYPES ===
const actionTypes = {
  runLoading(loading) {
    return {
      loading,
      type: Types.POST_LOADING,
    };
  },
  postFetch(list) {
    return {
      type: Types.POST_FETCH,
      list
    };
  },
  postFetchDetail(detail) {
    return {
      type: Types.POST_FETCH_DETAIL,
      detail
    };
  },
  postReset() {
    return {
      type: Types.POST_RESET
    };
  },
  postAttach(identity) {
    return {
      type: Types.POST_ATTACH,
      identity
    };
  },
  postClear() {
    return {
      type: Types.POST_CLEAR
    };
  },

  postSave(post) {
    return {
      type: Types.POST_SAVE,
      post
    };
  },

  postSaveFaild(faild) {
    return {
      type: Types.POST_SAVE_FAILD,
      faild
    };
  },

  postSaveError(error) {
    return {
      type: Types.POST_SAVE_ERROR,
      error
    };
  },

  postDelete(result, identity) {
    return {
      type: Types.POST_DELETE,
      result,
      identity
    };
  },

  postDeleteFaild(identity) {
    return {
      type: Types.POST_DELETE_FAILD,
      identity
    };
  }
};


//=== ACTION MIDLEWARES ===
const actionMidlewares = {
  fetchPost(params) {

    return dispatch => {
      // dispatch(actionTypes.runLoading(true));
      firebase.ref('/posts').orderByChild('created').once('value', snap => {
        var returnArr = [];

        snap.forEach(function (childSnapshot) {
          if (childSnapshot.val() !== 1) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
          }
        });
        dispatch(actionTypes.postFetch(returnArr.reverse()));
        // dispatch(actionTypes.runLoading(false));
      }).catch((error) => {
        dispatch(actionTypes.postReset(error));
      });
    };
  },

  fetchPostDetail(key) {
    return dispatch => {
      // dispatch(actionTypes.runLoading(true));
      firebase.ref('/posts').child(key).once('value', snap => {
        const detail = snap.val();
        detail.key=snap.key;
        console.log(detail, 'childSnapshot');
        dispatch(actionTypes.postFetchDetail(detail));
        dispatch(actionTypes.runLoading(false));
      }).catch((error) => {
        dispatch(actionTypes.postReset(error));
      });
    };
  },

  initPost(params) {
    return dispatch => {
      const { postId } = params;

      FetchHelper.get(
        ApiUrl.post + '/' + postId,
        {},
        undefined,
        res => {
          dispatch(actionTypes.postAttach(res));
        },
        () => {
          dispatch(actionTypes.postClear());
        },
        () => {
          dispatch(actionTypes.postClear());
        }
      );
    };
  },

  savePost(params, editable) {
    return dispatch => {
      // dispatch(actionTypes.runLoading(true));
      let { key, title, content, author, avatar, currentTime, status } = params;
      let url = !editable ? '/posts' : '/posts/' + key;
      const guestsRef = firebase.ref(url);
      if (editable) {
        guestsRef.update({
          title,
          content,
          avatar,
          author,
          updated: currentTime,
          status
        }).then((snap) => {
          console.log(snap.val(),'123');
          dispatch(actionTypes.postSave({ key, title, author, avatar }));
          // dispatch(actionTypes.runLoading(false));
        }).catch((error) => {
          dispatch(actionTypes.postSaveFaild(error));
          // dispatch(actionTypes.runLoading(false));
        });
      } else {
        const resultKey = guestsRef.push({
          title,
          content,
          author,
          avatar,
          created: currentTime,
          status
        }).key;

        dispatch(actionTypes.postSave(resultKey));
        // dispatch(actionTypes.postSaveFaild(error));
      }

    };
  },

  deletePost(postId) {
    return dispatch => {
      let url = '/posts/' + postId;
      const guestsRef = firebase.ref(url);
      guestsRef.remove().then(() => {
        dispatch(actionTypes.postDelete());
      }).catch((error) => {
        dispatch(actionTypes.postDeleteFaild(error));
      });
    };
  },

  addGoogleSheet(request) {
    const { fullname, phone, note, address } = request;
    return dispatch => {
      let url = 'https://script.google.com/macros/s/AKfycbz1mmHFNZNMREv58N0F2nZWEPqYXJsEUPl52FxVySVC0Io9M_s/exec';
      return axios({
        method: 'post',
        url,
        params: {
          fullname,
          phone,
          address,
          note
        }
      });

    };
  }
};

//=== ACTION OFFLINE ===
const actionOffline = {};

//=== ACTION FINAL ===
const actionFinal = Object.assign(actionTypes, actionMidlewares, actionOffline);

export default actionFinal;
