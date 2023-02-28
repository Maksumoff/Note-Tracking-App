import React from "react";
import NoteList from "../NoteList";
import { Container } from "./styled";

export const Note = () => {
  return (
    <Container>
      <h1>Note page</h1>
      <NoteList />
    </Container>
  );
};

export default Note;
