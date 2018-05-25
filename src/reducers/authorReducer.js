import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state= initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    case types.CREATE_AUTHOR_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.authors)
      ];
    case types.UPDATE_AUTHORS_SUCCESS:
      return [
        ...state.filter(authors => authors.id !== action.authors.id),
        Object.assign({}, action.authors)
      ];
    default:
      return state;
  }
}
