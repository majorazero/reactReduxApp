import * as types from "./actionTypes";
import courseApi from "../api/mockCourseApi";
import {beginAjaxCall} from "./ajaxStatusActions";

// export function createCourse(course) {
//   return { type: types.CREATE_COURSE, course: course}
// }

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses: courses};
}

export function updateCourseSuccess(courses) {
  return {type: types.UPDATE_COURSE_SUCCESS, courses: courses};
}

export function createCourseSuccess(courses) {
  return {type: types.CREATE_COURSE_SUCCESS, courses: courses};
}

export function loadCourses() { //this is a thunk
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
        dispatch(loadCoursesSuccess(courses));
      }).catch(error => {
        throw(error);
      });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
