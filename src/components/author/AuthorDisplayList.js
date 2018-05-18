import React, {PropTypes} from "react";
import AuthorDisplayListRow from "./AuthorDisplayListRow";

const AuthorDisplayList = ({courses}) => {
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
          <AuthorDisplayListRow key={course.id} course={course}/>
        )}
      </tbody>
    </table>
  );
};

AuthorDisplayList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default AuthorDisplayList;
