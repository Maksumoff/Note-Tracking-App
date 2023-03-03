import React, { useState } from "react";
import NoteList from "../NoteList";
import { Container } from "./styled";
import { nanoid } from "nanoid";

export const Note = () => {
  const dateLocal = new Date(Date.now()).toLocaleDateString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const [todos, setTodos] = useState([]);

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "title",
      todos: todos,
      date: dateLocal,
      completed: false,
    },
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

  // const { todos } = notes[0];
  const addNoteHandler = (note) => {
    setNotes((notes) => [...notes, note]);
    console.log(note);
  };

  const addTodoHandler = (note) => {
    const newTodo = [...todos, note];
    // console.log(newTodo);
    setTodos(newTodo);
    // setNotes(({ todos }) => [...todos, note]);
  };

  const deleteHandler = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    console.log(id + "hey");
  };
  // console.log(notes);
  // console.log(notes[0].todos.length);
  // console.log(notes.todos);
  console.log(todos);
  console.log(notes);

  return (
    <Container>
      {todos.map((todo) => (
        <h1 key={todo.id}>{todo.todos} </h1>
      ))}
      <h1>Note page</h1>
      <NoteList
        notes={notes}
        todos={todos}
        addNoteHandler={addNoteHandler}
        addTodoHandler={addTodoHandler}
        deleteHandler={deleteHandler}
      />
    </Container>
  );
};

export default Note;
