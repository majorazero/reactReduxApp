import expect from "expect";
import * as courseActions from "./courseActions";
import * as types from "./actionTypes";

describe("Course Actions", () => {
  describe("createCourseSuccess", () => {
    it("should create a CREATE_COURSE_SUCCESS", () => {
      const course = {id: "clean-code", title: "Clean Code"};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        courses: course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    })
  });
});
