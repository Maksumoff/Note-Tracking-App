import React from "react";
import { Container, FooterNote, Icons } from "./styled";

export const Notes = ({
  id,
  title,
  todos,
  todos1,
  todos2,
  date,
  completed,
  deleteHandler,
}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox" checked={completed} disabled />
            {todos}
          </label>
        </li>
        {todos1 && (
          <li>
            <label>
              <input type="checkbox" checked={completed} disabled />
              {todos1}
            </label>
          </li>
        )}
        {todos2 && (
          <li>
            <label>
              <input type="checkbox" checked={completed} disabled />
              {todos2}
            </label>
          </li>
        )}
      </ul>
      <FooterNote>
        <p>{date}</p>
        <Icons.Trash onClick={() => deleteHandler(id)} />
      </FooterNote>
    </Container>
  );
};

export default Notes;
