import React, {PropTypes} from "react";
import {Link }from "react-router";

const AuthorListRow = ({author,courses}) => {
  return(
    <tr>
      <td><Link to={`/author/`+author.id}>Edit</Link></td>
      <td><Link to={`/author/`+author.id}>{author.firstName} {author.lastName}</Link></td>
      <td>{amountOfCourses(author.id,courses)}</td>
    </tr>
  );
};

function amountOfCourses(id,courses){
  let num = 0;
  for(let i=0; i<courses.length; i++){
    if(courses[i].authorId == id){
      num++;
    }
  }
  return num;
}

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

export default AuthorListRow;
