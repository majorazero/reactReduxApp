//root reducer is called index.js usually
import {combineReducers} from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  courses: courses
});

export default rootReducer;
