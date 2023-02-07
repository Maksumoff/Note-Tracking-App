import React from "react";
import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
import { Container, Wrapper, WrapperMain } from "./styled";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <WrapperMain>
        <Wrapper>
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </Wrapper>
      </WrapperMain>
    </Container>
  );
};
export default Home;
