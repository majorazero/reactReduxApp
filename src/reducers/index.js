//root reducer is called index.js usually
import {combineReducers} from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import numAjaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  numAjaxCallsInProgress: numAjaxCallsInProgress
});

export default rootReducer;
