import React, { useState } from "react";
import { Container, FooterNote, Icons, IconsWrapper, Input } from "./styled";

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
  const [editICon, setEditIcon] = useState(false);

  return (
    <Container>
      <h1>{title}</h1>
      <ul>
        <li>
          <label>
            <Input type="checkbox" checked={completed} disabled />
            {todos}
          </label>
        </li>
        {todos1 && (
          <li>
            <label>
              <Input type="checkbox" checked={completed} disabled />
              {todos1}
            </label>
          </li>
        )}
        {todos2 && (
          <li>
            <label>
              <Input type="checkbox" checked={completed} disabled />
              {todos2}
            </label>
          </li>
        )}
      </ul>
      <FooterNote>
        <p>{date}</p>
        <IconsWrapper>
          {editICon ? (
            <Icons.Save
              size="20px"
              onClick={() => setEditIcon((prev) => !prev)}
            />
          ) : (
            <Icons.Edit
              size="20px"
              onClick={() => setEditIcon((prev) => !prev)}
            />
          )}
          <Icons.Trash size="20px" onClick={() => deleteHandler(id)} />
        </IconsWrapper>
      </FooterNote>
    </Container>
  );
};

export default Notes;
