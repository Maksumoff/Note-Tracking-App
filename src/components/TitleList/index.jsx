import React from "react";
import { Container, Input, InputWrapper, Span } from "./styled";

export const Title = ({ todo, removeTodo, handleChange, enterEditMode }) => {
  const handleCheckboxChange = () => {
    if (todo.done) return null;
    handleChange(todo.id);
  };

  return (
    <Container>
      <InputWrapper>
        <Span edit onClick={() => enterEditMode(todo)}>
          edit
        </Span>
      </InputWrapper>
    </Container>
  );
};
