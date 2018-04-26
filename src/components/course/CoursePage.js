import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseList from "./CourseList";

class CoursePage extends React.Component {
  constructor(props, context) { //props and context?
    super(props, context); //you've seen this before as super();

  }
  courseRow(course, index) {
    return (<div key={index}>{course.title}</div>);
  }
  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}
CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses //based on what you wrote in the root reducer
  };
}
function mapDispatchToProps(dispatch){//dispatch is injected by connect
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
//export default CoursePage; changed to bottom because this container needs to interact with redux
export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
