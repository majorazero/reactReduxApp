import AuthorApi from "../api/mockAuthorApi";
import * as types from "./actionTypes";
import {beginAjaxCall} from "./ajaxStatusActions";

export function loadAuthorSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors: authors};
}

export function createAuthorSuccess(authors) {
  return {type: types.CREATE_AUTHOR_SUCCESS, authors: authors}
}

export function updateAuthorSuccess(authors) {
  return {type: types.UPDATE_AUTHORS_SUCCESS, authors: authors};
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveAuthor(author) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then(savedAuthor => {
      author.id ? dispatch(updateAuthorSuccess(savedAuthor)) :
        dispatch(createAuthorSuccess(savedAuthor));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
