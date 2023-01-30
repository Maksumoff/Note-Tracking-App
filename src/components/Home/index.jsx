import React from "react";
import { Input } from "../Generics";
import { Container } from "./styled";

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input width={200} placeholder={"Test"} />
    </Container>
  );
};
export default Home;
