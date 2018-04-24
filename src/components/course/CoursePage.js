import React, {PropTypes} from "react";

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
    alert(`Saving ${this.state.course.title}`);
  }
  render() {
    return (
      <div>
        <h1>Courses</h1>
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

export default CoursePage;
