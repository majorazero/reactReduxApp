import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) { //if you pass initialState it will override your [] state
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    // case types.CREATE_COURSE:
    //   return [...state, //...state is a spread operator it converts it all into inline values
    //     Object.assign({}, action.course)];
    default:
      return state;
  }
}
