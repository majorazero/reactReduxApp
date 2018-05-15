import React from "react";
import AuthorListRow from "./AuthorListRow";

const AuthorList = ({authors,courses}) => {
  return(
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Authors</th>
          <th>Number of Courses</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(author =>
          <AuthorListRow key={author.id}author={author}courses={courses}/>
        )}
      </tbody>
    </table>
  );
};

export default AuthorList;
