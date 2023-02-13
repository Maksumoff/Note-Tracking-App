import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  margin: 10px;
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 350px;
  min-height: 320px;
  /* border: 1px solid #e6e9ec; */
`;

const Img = styled.img`
  width: 100%;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
`;

export { Container, Img, Wrapper, Blur };
