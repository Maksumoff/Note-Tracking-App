import React, { useState } from "react";
import { Container, FooterNote, Icons } from "./styled";
import { nanoid } from "nanoid";

export const AddNote = ({ notes, AddNoteHandler }) => {
  const { title, date, todos, completed } = notes[0];
  const { first } = todos[0];
  const { second } = todos[1];
  const { third } = todos[2];
  const [addBtn, SetAddBtn] = useState(false);
  const [addNotes, SetAddNotes] = useState("");

  const OnChange = (e) => {
    SetAddNotes(e.target.value);
  };

  const OnClickHandler = () => {
    let NewTodo = {
      id: nanoid(),
      title: addNotes,
      todos: [{ first: addNotes, second: addNotes, third: addNotes }],
      date: new Date().toLocaleDateString(),
      completed: true,
    };
    AddNoteHandler(NewTodo);
  };

  return (
    <Container>
      {/* {addNotes} */}
      {addBtn ? (
        <>
          {/* <h1>Note Title</h1> */}
          <label>
            <input type="text" onChange={OnChange} />
          </label>
          <ul>
            <li>
              <label>
                <input type="checkbox" checked={completed} disabled />
                {/* {todos[0].first} {""}
                {first} */}
              </label>
              <label>
                <input type="text" onChange={OnChange} />
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" checked={completed} disabled />
                {/* {todos[1].second} {""}
                {second} */}
              </label>
              <label>
                <input type="text" onChange={OnChange} />
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" checked={completed} disabled />
                {/* {todos[2].third} {""}
                {third} */}
              </label>
              <label>
                <input type="text" onChange={OnChange} />
              </label>
            </li>
          </ul>
          <FooterNote>
            <p>{date}</p>
            <Icons.Done onClick={OnClickHandler} />
          </FooterNote>
        </>
      ) : (
        <Icons.AddBtn size="3.5em" onClick={() => SetAddBtn(!false)} />
      )}
    </Container>
  );
};

export default AddNote;
