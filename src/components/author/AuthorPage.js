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
    const {authors} = this.props;
    return(
      <div>
        <h1>Authors</h1>
        <input
          types="submit"
          value="Add Author"
          className="btn btn-primary"
          onClick={this.redirectoAddAuthorPage}/>
        <AuthorList authors={authors}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors //based on what you wrote in the root reducer
  };
}

export default connect(mapStateToProps)(AuthorPage);
