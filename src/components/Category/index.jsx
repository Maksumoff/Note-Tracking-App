import { Carousel } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Arrow, Container } from "./styled";

import CategoryCard from "../CategoryCard";
const { REACT_APP_BASE_URL: url } = process.env;

export const GenCarousel = () => {
  const sliderRef = useRef();
  const [data, setData] = useState([]);

  const onChange = (currentSlide) => {};

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "left") sliderRef.current.prev();
    if (name === "right") sliderRef.current.next();
  };

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  console.log(data);
  return (
    <Container>
      <Carousel ref={sliderRef} afterChange={onChange}>
        {data.map((value) => {
          return <CategoryCard />;
        })}
      </Carousel>

      <Arrow onClick={onMove} data-name="left" />
      <Arrow onClick={onMove} data-name="right" right="true" />
    </Container>
  );
};
export default GenCarousel;
