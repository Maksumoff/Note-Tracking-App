import React from "react";
import {
  Container,
  Footer,
  Icons,
  IconsWrapper,
  Img,
  Info,
  Wrapper,
} from "./styled";
import noimg from "../../assets/imgs/noimg.png";
export const HouseCard = ({ url, title, info }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Wrapper>
        <div className="subTitle">{title || "New Apartment Nice View"}</div>
        <Info>{info || "Quncy St. Brooklyn, NY, USA"}</Info>
        <IconsWrapper>
          <IconsWrapper.Info>
            <Icons.Bed /> <div className="info"> 4 Beds</div>
          </IconsWrapper.Info>
          <IconsWrapper.Info>
            <Icons.Bath /> <div className="info">5 Baths</div>
          </IconsWrapper.Info>
          <IconsWrapper.Info>
            <Icons.Garage /> <div className="info">1 Garage</div>
          </IconsWrapper.Info>
          <IconsWrapper.Info>
            <Icons.Metrics />
            <div className="info">1300 Sq Ft</div>
          </IconsWrapper.Info>
        </IconsWrapper>
      </Wrapper>
      <Footer>
        <IconsWrapper footer="true">
          <Info nopadding="true">$2,800/month</Info>
          <div className="subTitle">$7,500/month</div>
        </IconsWrapper>
        <IconsWrapper>
          <Icons.Expand />
          <Icons.Love />
        </IconsWrapper>
      </Footer>
    </Container>
  );
};
export default HouseCard;
