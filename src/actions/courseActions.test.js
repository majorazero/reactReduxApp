import expect from "expect";
import * as courseActions from "./courseActions";
import * as types from "./actionTypes";

//required to test thunks
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

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
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Action", () => {
  afterEach(() => {
    nock.cleanAll(); // required or memory leak etc etc
  });

  it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", (done) => {
    //nock example used if making call to a real api
    // nock("http://example.com")
    //   .get("/courses")
    //   .reply(200, {body: {course: [{id:1, firstName: "Cory", lastName:"House"}]}});

    const expectedAction = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id:"clean-code", title: "Clean Code"}]}}
    ];

    const store = mockStore({courses: []}, expectedAction);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done(); //completes async flow
    });
  });
});
