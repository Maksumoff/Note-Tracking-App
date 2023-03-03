import React from "react";
import { Container, FooterNote, Icons } from "./styled";

export const Notes = ({ id, title, todos, date, completed, deleteHandler }) => {
  // const { id, title, date, todos, completed } = notes;
  // const { first } = todos[0];
  // const { second } = todos[1];
  // const { third } = todos[2];

  // console.log(notes);
  // console.log(notes.todos);
  // console.log(notes.title);

  // console.log(todos);
  // console.log(first);

  // console.log(todos[0].first, "notes");
  // console.log(todos[1].second, "notes");
  // console.log(todos[2].third, "notes");

  return (
    <Container>
      <h1>{title}</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox" checked={completed} disabled />
            {/* {todos[0].first} {""} */}
            {todos}
          </label>
        </li>

        {/* <li>
          <label>
            <input type="checkbox" checked={completed} disabled />
            {todos[1].second} {""}
            {second}
            {todos}
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked={completed} disabled />
            {todos[2].third} {""}
            {third}
            {todos}
          </label>
        </li> */}
      </ul>
      <FooterNote>
        <p>{date}</p>
        <Icons.Trash onClick={() => deleteHandler(id)} />
      </FooterNote>
    </Container>
  );
};

export default Notes;
