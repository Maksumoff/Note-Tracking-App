import React from "react";
import AddNote from "../AddNote";
import Notes from "../Notes";
import { Container, ListWrapper } from "./styled";

export const NoteList = ({ notes, addNoteHandler, deleteHandler }) => {
  return (
    <Container>
      {/* <h1 align="center">Note List</h1>
      {notes[0].todos[0].first} {""}
      {todos[0].first} {""}
      {first}
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <h1>{note.title}</h1>
            {note.todos.map((first, index) => {
              return (
                <ul key={index}>
                  <li>
                    <label>
                      <input type="checkbox" />
                      {""} {first.first} {first.second} {first.third}
                    </label>
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })} */}
      <ListWrapper>
        {notes.map(({ id, title, todos, todos1, todos2, date, completed }) => (
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
          />
        ))}
        <AddNote
          notes={notes}
          completed={notes.completed}
          date={notes.date}
          addNoteHandler={addNoteHandler}
        />
      </ListWrapper>
    </Container>
  );
};

export default NoteList;
