import React from "react";
import { Container } from "./styled";

export const Input = ({
  placeholder,
  onChange,
  value,
  defaultValue,
  name,
  width,
  height,
}) => {
  return (
    <Container
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      name={name}
      width={width}
      height={height}
    ></Container>
  );
};

export default Input;
