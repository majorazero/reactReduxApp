import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import AuthorList from "./AuthorList";

class AuthorPage extends React.Component {
  constructor(props,context) {
    super(props, context);
    this.redirectoAddAuthorPage = this.redirectoAddAuthorPage.bind(this);
  }
  redirectoAddAuthorPage() {
    browserHistory.push("/author");
  }
  render() {
    const {authors, courses} = this.props;
    return(
      <div>
        <h1>Authors</h1>
        <input
          types="submit"
          value="Add Author"
          className="btn btn-primary"
          onClick={this.redirectoAddAuthorPage}/>
        <AuthorList authors={authors} courses={courses}/>
      </div>
    );
  }
}

AuthorPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors, //based on what you wrote in the root reducer
    courses: state.courses
  };
}

export default connect(mapStateToProps)(AuthorPage);
