import React, {PropTypes} from "react";
import {connect} from "react-redux";
//import {bindActionCreators} from "redux";
//import * as courseActions from "../../actions/courseActions";
import AuthorForm from "./AuthorForm";
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
        <AuthorForm author={this.props.author} courses={this.props.courses}/>
      </div>
    );
  }
}

ManageAuthorPage.propTypes = {
  author: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired
};

function getAuthorById(authors, id) {
  const author = authors.filter(author => author.id == id);
  if (author) { return author[0].firstName+ " "+author[0].lastName;} //filter returns an array so you have to call it like this
  else {return null;}
}

function getCoursesById(cours, id) {
  const cour = cours.filter(cour => cour.authorId == id);
  if(cour) {return cour;}
  else {return null;}
}

function mapStateToProps(state, ownProps) {
  let authorId = ownProps.params.id;
  let author = "";
  let courses = [];
  if (authorId) {
    author = getAuthorById(state.authors,authorId);
    courses = getCoursesById(state.courses,authorId);
  }
  return {
    author: author,
    courses: courses
  };
}

export default connect(mapStateToProps)(ManageAuthorPage);
