import React from "react";
import { Container } from "./styled";

export const Button = ({ children, type, onClick, width, height }) => {
  return (
    <Container onClick={onClick} type={type} width={width} height={height}>
      {children || "Generic buttons"}
    </Container>
  );
};

export default Button;
