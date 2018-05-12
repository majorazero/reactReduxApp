import React, {PropTypes} from "react";
import AuthorFormList from "./AuthorFormList";

const AuthorForm = ({author,courses}) => {
  return(
    <div>
      <h2>{author}</h2>
      <AuthorFormList courses={courses} />
    </div>
  );
};

AuthorForm.propTypes = {
  author: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired
};

export default AuthorForm;
