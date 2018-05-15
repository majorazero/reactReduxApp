import React, {PropTypes} from "react";
import AuthorFormList from "./AuthorFormList";
import TextInput from "../common/TextInput";

const AuthorForm = ({author,authorId,courses}) => {
  return(
    <div>
      <TextInput
        name="Author"
        label="Author"
        value={author}/>
        <TextInput
          name="AuthorId"
          label="AuthorId"
          value={authorId}/>
          <input
            type="submit"
            value={"Save"}
            className="btn btn-primary"/>
    </div>
  );
};

AuthorForm.propTypes = {
  author: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired
};

export default AuthorForm;
