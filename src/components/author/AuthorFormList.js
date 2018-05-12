import React, {PropTypes} from "react";
import AuthorFormListRow from "./AuthorFormListRow";

const AuthorFormList = ({courses}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
          <AuthorFormListRow key={course.id} course={course}/>
        )}
      </tbody>
    </table>
  );
};

AuthorFormList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default AuthorFormList;
