import styled, { css } from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: 571px;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 8px;
  height: 12px;
  padding: 17px 19px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  transform: ${({ right }) => right && "rotate(180deg)"};
  left: ${({ right }) => !right && "32px"};
  right: ${({ right }) => right && "32px"};

  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  height: 571px;
  width: 100%;
`;
const common = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Blur = styled.div`
  ${common};
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  ${common};
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
`;

const fontSize = css`
  font-family: "Montserrat";
  font-style: normal;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

Content.Title = styled.h1`
  ${fontSize};
  padding-bottom: 8px;
  font-weight: ${({ price }) => (price ? "600" : "700")};
  font-size: ${({ price }) => (price ? "28px" : "44px")};
  line-height: ${({ price }) => (price ? "36px" : "48px")};
`;

Content.Desc = styled.div`
  ${fontSize};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export { Container, Arrow, Img, Blur, Content };
