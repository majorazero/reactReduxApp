import React, {PropTypes} from "react";
import TextInput from "../common/TextInput";

const AuthorForm = ({author,authorId,courses,onChange,onSave}) => {
  return(
    <div>
      <TextInput
        name="First Name"
        label="First Name"
        value={author}
        onChange={onChange}/>
      <TextInput
        name="Last Name"
        label="Last Name"
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
        className="btn btn-primary"
        onClick={onSave}/>
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
