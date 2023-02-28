import React from "react";
import Notes from "../Notes";
import { Container } from "./styled";

export const NoteList = () => {
  return (
    <Container>
      <h1>Note List </h1>
      <Notes />
    </Container>
  );
};

export default NoteList;
