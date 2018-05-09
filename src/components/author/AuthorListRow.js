import React, {PropTypes} from "react";

const AuthorListRow = ({author}) => {
  return(
    <tr>
      <td>{author.firstName} {author.lastName}</td>
    </tr>
  );
};

export default AuthorListRow;
