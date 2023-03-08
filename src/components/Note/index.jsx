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

  const addNoteHandler = (note) => {
    setNotes((notes) => [...notes, note]);
    console.log(note);
  };

  const deleteHandler = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    console.log(id + "hey");
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
      />
    </Container>
  );
};

export default Note;
