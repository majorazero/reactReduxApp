import React, {PropTypes} from "react";

const AuthorDisplayListRow = ({course}) => {
  return(
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td>{course.title}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

AuthorDisplayListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default AuthorDisplayListRow;
