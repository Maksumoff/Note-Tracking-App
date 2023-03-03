import React, { useState } from "react";
import { Container, FooterNote, Icons } from "./styled";
import { nanoid } from "nanoid";

export const AddNote = ({
  notes,
  addNoteHandler,
  addTodoHandler,
  completed,
  date,
  todos,
}) => {
  // const { date, completed } = notes[0];
  // const { first } = todos[0];
  // const { second } = todos[1];
  // const { third } = todos[2];
  // const [todos] = notes;

  const [addBtn, SetAddBtn] = useState(false);
  const [addNotes, setAddNotes] = useState({ title: "", todos: "" });
  // const [title, setTitle] = useState("");
  // const [todos, setTodos] = useState("");
  const taskLimit = 2;
  const OnChange = ({ target }) => {
    // setAddNotes({ [target.name]: target.value });
    const nameHandler = { ...addNotes, [target.name]: target.value };
    setAddNotes(nameHandler);

    // console.log(target.name, target.value);
    // console.log(setAddNotes({ [e.target.name]: e.target.value }));

    // setTitle({ [target.name]: target.value });
    // setTodos({ [target.name]: target.value });
  };

  const onClickHandler = (e) => {
    let NewTodo = {
      id: nanoid(),
      title: addNotes.title,
      todos: addNotes.todos,
      date: new Date().toLocaleDateString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      completed: false,
    };
    if (addNotes.title.trim().length > 0 && addNotes.todos.trim().length > 0) {
      addNoteHandler(NewTodo);
      setAddNotes("");
    } else {
      alert(
        `Please fill ${addNotes.title.trim().length > 0 ? "" : "title "}${
          addNotes.todos.trim().length > 0 ? "" : "todos"
        }
          `
      );
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let NewTodo = {
      id: nanoid(),
      // title: addNotes.title,
      todos: addNotes.todos,
      completed: false,
    };

    addTodoHandler(NewTodo);
    setAddNotes("");
    // if (addNotes.todos.trim().length > 0 && notes.length <= taskLimit) {
    //   addNoteHandler(NewTodo);
    //   setAddNotes("");
    // } else {
    //   alert("you can add only 3 todos in one note");
    // }

    // if (addNotes.title.trim().length > 0 && addNotes.todos.trim().length > 0) {
    //   addNoteHandler(NewTodo);
    //   setAddNotes("");
    // } else {
    //   alert(
    //     `Please fill ${addNotes.title.trim().length > 0 ? "" : "title "}${
    //       addNotes.todos.trim().length > 0 ? "" : "todos"
    //     }
    //       `
    //   );
    // }
  };
  // console.log(addNotes);
  // console.log(notes[0].todos.length);
  // console.log(notes.length);
  // console.log(todos);

  // console.log(addNoteHandler);

  // console.log(title.title);
  // console.log(todos);

  return (
    <Container>
      {/* {addNotes} */}
      {addBtn ? (
        <form onSubmit={onSubmitHandler}>
          {/* <h1>Note Title</h1> */}
          <label>
            <input
              type="text"
              name="title"
              placeholder="Enter title ..."
              value={addNotes.title || ""}
              onChange={OnChange}
              autoFocus
              required
            />
            {addNotes.title}
          </label>
          <ul>
            <li>
              <label>
                <input type="checkbox" checked={completed} disabled />
                {/* {todos[0].first} {""}
                {first} */}
              </label>
              <label>
                <input
                  type="text"
                  name="todos"
                  placeholder="Enter todo items ..."
                  value={addNotes.todos || ""}
                  onChange={OnChange}
                  required
                />
                {addNotes.todos}
              </label>
            </li>
          </ul>
          <label>
            <input type="submit" value="add" />
          </label>
          <h1>{todos} </h1>
          {/* <li>
              <label>
                <input type="checkbox" checked={completed} disabled />
                {todos[1].second} {""}
                {second}
              </label>
              <label>
                <input type="text" onChange={OnChange} />
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" checked={completed} disabled />
                {todos[2].third} {""}
                {third}
              </label>
              <label>
                <input type="text" onChange={OnChange} />
              </label>
            </li> */}
          <FooterNote>
            <p>{date}</p>

            <Icons.Done onClick={onClickHandler} />
          </FooterNote>
        </form>
      ) : (
        <Icons.AddBtn size="3.5em" onClick={() => SetAddBtn(!false)} />
      )}
    </Container>
  );
};

export default AddNote;
