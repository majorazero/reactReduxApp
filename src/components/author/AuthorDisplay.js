import React, {PropTypes} from "react";
import AuthorFormList from "./AuthorFormList";
import TextInput from "../common/TextInput";

const AuthorDisplay = ({author, courses}) => {
  return(
    <div>
      <h1>{author}</h1>
      <AuthorFormList courses={courses} />
    </div>
  );
};

AuthorDisplay.propTypes = {
  author: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired
};

export default AuthorDisplay;
