import React, {PropTypes} from "react";
import {connect} from "react-redux";
//import {bindActionCreators} from "redux";
//import * as courseActions from "../../actions/courseActions";
//import CourseForm from "./CourseForm";
//import { authorsFormattedForDropdown } from "../../selectors/selectors";
//import toastr from "toastr";

class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props,context);
    this.state = {
      author: Object.assign({},this.props.author)
    };
  }
  render() {
    return(
      <div>
        <h1>Edit Authors</h1>
        <h2>{this.props.author}</h2>
      </div>
    );
  }
}

ManageAuthorPage.propTypes = {
  author: PropTypes.string.isRequired
};

function getAuthorById(authors, id) {
  const author = authors.filter(author => author.id == id);
  if (author) { return author[0].firstName+ " "+author[0].lastName;} //filter returns an array so you have to call it like this
  else {return null;}
}

function mapStateToProps(state, ownProps) {
  let authorId = ownProps.params.id;
  let author = "";
  if (authorId) {
    author = getAuthorById(state.authors,authorId);
  }
  return {
    author: author
  };
}

export default connect(mapStateToProps)(ManageAuthorPage);
