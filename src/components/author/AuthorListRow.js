import React, {PropTypes} from "react";
import {Link }from "react-router";

const AuthorListRow = ({author}) => {
  return(
    <tr>
      <td><Link to={`/author/`+author.id}>{author.firstName} {author.lastName}</Link></td>
    </tr>
  );
};

export default AuthorListRow;
