import { Carousel } from "antd";
import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./styled";
import img1 from "../../assets/imgs/house1.png";
import img2 from "../../assets/imgs/house2.png";

export const GenCarousel = () => {
  const sliderRef = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "left") sliderRef.current.prev();
    if (name === "right") sliderRef.current.next();
  };

  return (
    <Container>
      <Carousel ref={sliderRef} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className="subChild">
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Title price="true">$5.250/month</Content.Title>
      </Content>
      <Arrow onClick={onMove} data-name="left" />
      <Arrow onClick={onMove} data-name="right" right="true" />
    </Container>
  );
};
export default GenCarousel;
