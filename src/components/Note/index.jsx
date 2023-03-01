import React, { useState } from "react";
import NoteList from "../NoteList";
import { Container } from "./styled";
import { nanoid } from "nanoid";

export const Note = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "First notes",
      todos: [
        { first: "first-todo" },
        { second: "second-todo" },
        { third: "third-todo" },
      ],
      date: Date.now(),
      completed: true,
    },
    {
      id: nanoid(),
      title: "Second notes",
      todos: [
        { first: "first-todo" },
        { second: "second-todo" },
        { third: "third-todo" },
      ],
      date: Date.now(),
      completed: true,
    },
    {
      id: nanoid(),
      title: "Third notes",
      todos: [
        { first: "first-todo" },
        { second: "second-todo" },
        { third: "third-todo" },
      ],
      date: Date.now(),
      completed: true,
    },
    {
      id: nanoid(),
      title: "Fourth notes",
      todos: [
        { first: "first-todo" },
        { second: "second-todo" },
        { third: "third-todo" },
      ],
      date: Date.now(),
      completed: true,
    },
    {
      id: nanoid(),
      title: "Fifth notes",
      todos: [
        { first: "first-todo" },
        { second: "second-todo" },
        { third: "third-todo" },
      ],
      date: Date.now(),
      completed: false,
    },
  ]);

  const AddNoteHandler = (note) => {
    console.log(note);
    setNotes((notes) => [...notes, note]);
  };

  return (
    <Container>
      <h1>Note page</h1>
      <NoteList notes={notes} AddNoteHandler={AddNoteHandler} />
    </Container>
  );
};

export default Note;
