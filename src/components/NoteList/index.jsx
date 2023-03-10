import React from "react";
import AddNote from "../AddNote";
import EditNote from "../EditNote";
import Notes from "../Notes";
import { Container, ListWrapper } from "./styled";

export const NoteList = ({
  notes,
  addNoteHandler,
  deleteHandler,
  show,
  onClose,
  isEditing,
  editedTask,
  onOpenEdit,
  onCloseEdit,
  updateNote,
  enterEditMode,
}) => {
  const sortNotes = notes.sort((a, b) => b.id - a.id);

  return (
    <Container>
      <ListWrapper>
        {isEditing ? (
          <EditNote
            addNoteHandler={addNoteHandler}
            show={show}
            notes={notes}
            onClose={onClose}
            isEditing={isEditing}
            onOpenEdit={onOpenEdit}
            onCloseEdit={onCloseEdit}
            editedTask={editedTask}
            updateNote={updateNote}
          />
        ) : (
          <AddNote
            completed={notes.completed}
            addNoteHandler={addNoteHandler}
            show={show}
            onClose={onClose}
          />
        )}

        {sortNotes.map(
          ({ id, title, todos, todos1, todos2, date, completed }) => (
            <Notes
              key={id}
              id={id}
              title={title}
              todos={todos}
              todos1={todos1}
              todos2={todos2}
              date={date}
              completed={completed}
              deleteHandler={deleteHandler}
              enterEditMode={enterEditMode}
              onOpenEdit={onOpenEdit}
            />
          )
        )}
      </ListWrapper>
    </Container>
  );
};

export default NoteList;
