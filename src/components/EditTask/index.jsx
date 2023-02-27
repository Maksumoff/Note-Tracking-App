import React, { useState } from "react";
import { Form, FormWrapper, Input } from "./styled";

export const EditTask = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTask, setUpdatedTask] = useState(editedTask.title);

  // useEffect(() => {
  //   const closeModalEsc = (e) => {
  //     e.key === "Escaped" && closeEditMode();
  //   };
  //   window.addEventListener("keydown", closeModalEsc);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, title: updatedTask });
  };

  const onInput = (e) => {
    setUpdatedTask(e.target.value);
    updatedTask.length === 49 && alert("Please input up to 50 character");
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="task"></label>
        <Input
          id="task"
          type="text"
          value={updatedTask || ""}
          onInput={onInput}
          className="inline"
          placeholder="update task"
          required
          autoFocus
          minLength={5}
          maxLength={50}
        />
        <Input
          type="submit"
          aria-label="update you task"
          button="true"
          value="save"
        />
        <Input
          type="button"
          aria-label="update you task"
          button="true"
          value="cancel"
          onClick={() => setUpdatedTask(editedTask.title)}
        />
      </Form>
      {/* <h1>{name}</h1> */}
    </FormWrapper>
  );
};

// import React from "react";

// export const Input = ({value, onChangeInput }) => (
// <input type='text' value={value} onChange={onChangeInput} />
//   )
//   export default Input;
