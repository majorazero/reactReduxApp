import React, {PropTypes} from "react";
import TextInput from "../common/TextInput";

const AuthorForm = ({author,authorId,courses,onChange}) => {
  return(
    <div>
      <TextInput
        name="Author"
        label="Author"
        value={author}
        onChange={onChange}/>
      <TextInput
        name="AuthorId"
        label="AuthorId"
        value={authorId}
        onChange={onChange}/>
      <input
        type="submit"
        value={"Save"}
        className="btn btn-primary"/>
    </div>
  );
};

AuthorForm.propTypes = {
  authorId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AuthorForm;
