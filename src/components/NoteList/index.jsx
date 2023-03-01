import React from "react";
import Notes from "../Notes";
import { Container, ListWrapper } from "./styled";

export const NoteList = ({ notes }) => {
  const { todos } = notes[0];
  const { first } = todos[0];

  // console.log(first);
  // console.log(todos);

  // console.log(notes);
  // console.log(notes[0].todos[ 0]);
  // console.log(notes[0].todos[1]);
  // console.log(notes[0].todos[2]);

  return (
    <Container>
      <h1 align="center">Note List</h1>
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
      })}
      <ListWrapper>
        {notes.map((notes) => (
          <Notes key={notes.id} notes={notes} />
        ))}

        {/* <Notes />
        <Notes />
        <Notes />
        <Notes /> */}
      </ListWrapper>
    </Container>
  );
};

export default NoteList;
