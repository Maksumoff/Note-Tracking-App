import React from "react";
import { Container, FooterNote, Icons } from "./styled";

export const Notes = () => {
  return (
    <Container>
      <h1>Note Title</h1>
      <FooterNote>
        <p>28/02/2023</p>
        <Icons.Trash />
      </FooterNote>
    </Container>
  );
};

export default Notes;
