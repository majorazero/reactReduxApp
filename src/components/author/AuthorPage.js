import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import AuthorList from "./AuthorList";

class AuthorPage extends React.Component {
  constructor(props,context) {
    super(props, context);
  }
  render() {
    const {authors} = this.props;
    return(
      <div>
        <h1>Authors</h1>
        <input
          types="submit"
          value="Add Author"
          className="btn btn-primary"/>
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
