import React, { useState } from "react";
import { Form, FormWrapper, Input } from "./styled";

export const AddTodo = ({ addTask, todos, enterEditMode }) => {
  const [task, setTask] = useState("");
  const [name, setName] = useState("");
  const taskLimit = 2;
  const tasksNoun = todos.length < 2 ? "items" : "item";

  const handleSubmit = (e) => {
    e.preventDefault();
    let NewTodo = {
      id: Date.now(),
      title: task,
      name: name,
      done: false,
    };

    if (task.trim().length > 0 && todos.length <= taskLimit) {
      addTask(NewTodo);
      setTask("");
      setName("");
    } else {
      alert("you can add only 3 todos in one note");
    }

    console.log(todos.length);
    console.log(typeof NewTodo.title);
    console.log(NewTodo);
  };

  const onInput = (e) => {
    setTask(e.target.value);
    task.length === 49 && alert("Please input up to 50 character");
    // console.log(task.length);
  };
  // console.log(todos.length);
  // console.log(tasksNoun);

  return (
    <FormWrapper>
      {todos.length <= taskLimit ? (
        <Form onSubmit={handleSubmit}>
          <label htmlFor="title"></label>
          <Input
            id="title"
            type="text"
            className="inline"
            placeholder="title"
            value={name || ""}
            // onInput={ onInput}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
            // minLength={5}
            maxLength={50}
          />
          <label htmlFor="task"></label>
          <Input
            id="task"
            type="text"
            value={task || ""}
            onInput={onInput}
            className="inline"
            placeholder="Write down your Todos up to 50characrets"
            required
            autoFocus
            minLength={5}
            maxLength={50}
          />
          <Input type="submit" aria-label="add" button="true" value="add" />
        </Form>
      ) : (
        <p align="center" style={{ margin: "auto", color: "#0d263b" }}>
          Each node should contain up to 3 items
        </p>
      )}
      <>
        <p align="center" style={{ margin: "10px" }}>
          {`You've left
              ${taskLimit + 1 - todos.length}
              ${tasksNoun} to add
              `}
        </p>
      </>
      {/* <FormWrapper>
        <h1>{name}</h1>
        <span edit onClick={() => enterEditMode(todos)}>
          edit
        </span>
      </FormWrapper> */}
      <hr />
    </FormWrapper>
  );
};
