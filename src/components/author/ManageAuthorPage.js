import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorForm from "./AuthorForm";
import toastr from "toastr";

class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props,context);
    this.state = {
      authorFirstName: Object.assign({},this.props.authorFirstName),
      authorLastName: Object.assign({},this.props.authorLastName)
    };
    this.updateAuthorState = this.updateAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  updateAuthorState(event) {
    const field = event.target.name;
    let author = Object.assign({}, this.state.author);
    author[field] = event.target.value;
    //debugger;
    return this.setState({author: this.state.author.concat(author)});
  }

  saveAuthor(event) {
    event.preventDefault();
    //
    // if( !this.courseFormIsValid()) {
    //   return;
    // }
    // this.setState({saving: true});//ok to use local state because this doesn't affect the rest of the app
    this.props.actions.saveAuthor(this.state.author)
      // .then(() => this.redirect())
       .catch(error => {
        toastr.error(error);
      //   this.setState({saving: false});
       });
  }

  render() {
    return(
      <div>
        <h1>Edit Authors</h1>
        <AuthorForm authorFirstName={this.props.authorFirstName}
          authorLastName={this.props.authorLastName}
          authorId={this.props.authorId}
          courses={this.props.courses}
          onChange={this.updateAuthorState}
          onSave={this.saveAuthor}/>
      </div>
    );
  }
}

ManageAuthorPage.propTypes = {
  author: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired
};


//firstLastOrder determines which name it returns
function getAuthorById(authors, id, firstLastOrder) {
  const author = authors.filter(author => author.id == id);
  if (author) {
    if (firstLastOrder == 1){
      return author[0].firstName;}
    else if (firstLastOrder == 2) {
      return author[0].lastName;}
  } //filter returns an array so you have to call it like this
  else {return null;}
}

function getCoursesById(cours, id) {
  const cour = cours.filter(cour => cour.authorId == id);
  if(cour) {return cour;}
  else {return null;}
}

function mapStateToProps(state, ownProps) {
  let authorId = ownProps.params.id;
  let authorFirstName = "";
  let authorLastName = "";
  let courses = [];
  if (authorId) {
    authorFirstName = getAuthorById(state.authors,authorId, 1);
    authorLastName = getAuthorById(state.authors,authorId, 2);
    courses = getCoursesById(state.courses,authorId);
  }
  return {
    authorId: ownProps.params.id,
    authorFirstName: authorFirstName,
    authorLastName: authorLastName,
    courses: courses
  };
}

ManageAuthorPage.propTypes = {
  authorId: PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
