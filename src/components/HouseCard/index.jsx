import React from "react";
import { Input } from "../Generics";
import { Container } from "./styled";

export const HouseCard = () => {
  return (
    <Container>
      <h1>HouseCard</h1>
      <Input width={200} placeholder={"Test"} />
    </Container>
  );
};
export default HouseCard;
