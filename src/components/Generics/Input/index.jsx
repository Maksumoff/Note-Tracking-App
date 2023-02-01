import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./styled";

export const Input = forwardRef(
  (
    {
      type,
      placeholder,
      onChange,
      value,
      defaultValue,
      name,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          name={name}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  }
);

export default Input;
