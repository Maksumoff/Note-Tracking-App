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
  // const [editICon, setEditIcon] = useState(false);

  const editMode = (note) => {
    enterEditMode(note);
    // setEditIcon((prev) => !prev);
    // setEditIcon(true);
    onOpenEdit();
  };

  return (
    <Container>
      <h1
        className="inline
      "
      >
        {title}
      </h1>
      <ul>
        <li>
          <Input id="todos" type="checkbox" checked={completed} disabled />
          <label htmlFor="todos">{todos}</label>

          <p></p>
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
        <p>
          <small>{date}</small>
        </p>
        <IconsWrapper>
          {/* {editICon ? (
            <Icons.Save size="20px" onClick={() => setEditIcon(false)} />
          ) : (
            <Icons.Edit
              size="20px"
              onClick={() =>
                editMode({ id, title, todos, todos1, todos2, date, completed })
              }
            />
          )} */}
          <Icons.Edit
            size="20px"
            onClick={() =>
              editMode({ id, title, todos, todos1, todos2, date, completed })
            }
          />
          <Icons.Trash size="20px" onClick={() => deleteHandler(id)} />
        </IconsWrapper>
      </FooterNote>
    </Container>
  );
};

export default Notes;
