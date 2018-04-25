import React, {PropTypes} from "react";
import {connect} from "react-redux";
import * as courseActions from "../../actions/courseActions";

class CoursePage extends React.Component {
  constructor(props, context) { //props and context?
    super(props, context); //you've seen this before as super();

    this.state = {
      course: {title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);// you can do this within render, but you'll impact performance
  }
  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }
  onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }
  courseRow(course, index) {
    return (<div key={index}>{course.title}</div>);
  }
  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}
CoursePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses //based on what you wrote in the root reducer
  };
}
//export default CoursePage; changed to bottom because this container needs to interact with redux
export default connect(mapStateToProps)(CoursePage);
