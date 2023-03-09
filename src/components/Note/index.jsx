import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Icons } from "../AddNote/styled";
import NoteList from "../NoteList";
import { Container } from "./styled";
// import { nanoid } from "nanoid";

export const Note = () => {
  const [notes, setNotes] = useLocalStorage("notes", [
    // {
    //   id: nanoid(),
    //   title: "title",
    //   todos: todos,
    //   date: dateLocal,
    //   completed: false,
    // },
    // {
    //   id: nanoid(),
    //   title: "Second notes",
    //   todos: "Todo items",
    //   date: dateLocal,
    //   completed: true,
    // },
    // {
    //   id: nanoid(),
    //   title: "Third notes",
    //   todos: "Todo items",
    //   date: dateLocal,
    //   completed: true,
    // },
    // {
    //   id: nanoid(),
    //   title: "Fourth notes",
    //   todos: "Todo items",
    //   date: dateLocal,
    //   completed: true,
    // },
    // {
    //   id: nanoid(),
    //   title: "Fifth notes",
    //   todos: "Todo items",
    //   date: dateLocal,
    //   completed: false,
    // },
  ]);
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const addNoteHandler = (note) => {
    setNotes((prev) => [...prev, note]);
    console.log(note);
  };

  const deleteHandler = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    console.log(id + "hey");
  };

  const updateNote = (updateNote) => {
    console.log(updateNote);

    // console.log(updateNote.todos);
    setNotes((prev) =>
      prev.map((notes) =>
        notes.id === updateNote.id
          ? { ...notes, title: updateNote.title, todos: updateNote.todos }
          : notes
      )
    );
  };

  const enterEditMode = ({ id, title, todos, todos1, todos2 }) => {
    setEditedTask({ id, title, todos, todos1, todos2 });
    setIsEditing(true);
    // console.log(
    //   "title:" + title,
    //   "todos:" + todos,
    //   "todos1:" + todos1,
    //   "todos2:" + todos2
    // );
    // console.log(todos);
  };

  return (
    <Container>
      <h1>Note page </h1>
      <Icons.AddBtn size="3.2em" onClick={() => setShow(true)} />
      <NoteList
        notes={notes}
        addNoteHandler={addNoteHandler}
        deleteHandler={deleteHandler}
        show={show}
        onClose={() => setShow(false)}
        isEditing={isEditing}
        onOpenEdit={() => setIsEditing(true)}
        onCloseEdit={() => setIsEditing(false)}
        enterEditMode={enterEditMode}
        editedTask={editedTask}
        updateNote={updateNote}
      />
    </Container>
  );
};

export default Note;
