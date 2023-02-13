import React from "react";
import GenCarousel from "../Carousel";
import Category from "../Category";
import { Container } from "./styled";
// import CategoryCard from "../CategoryCard";
// import HouseCard from "../HouseCard";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <Category />
      {/* <HouseCard /> */}
    </Container>
  );
};
export default Home;

// <WrapperMain>
//   <Wrapper>
//   </Wrapper>
// </WrapperMain>
