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
  enterEditMode,
  onOpenEdit,
}) => {
  const [editICon, setEditIcon] = useState(false);

  const editMode = (note) => {
    enterEditMode(note);
    // setEditIcon((prev) => !prev);
    setEditIcon(true);
    onOpenEdit();
  };

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
            <Icons.Save size="20px" onClick={() => setEditIcon(false)} />
          ) : (
            <Icons.Edit
              size="20px"
              onClick={() =>
                editMode({ id, title, todos, todos1, todos2, date, completed })
              }
            />
          )}
          <Icons.Trash size="20px" onClick={() => deleteHandler(id)} />
        </IconsWrapper>
      </FooterNote>
    </Container>
  );
};

export default Notes;
