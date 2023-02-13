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

export const HouseCard = ({ data = {} }) => {
  const {
    name,
    address,
    description,
    houseDetails,
    region,
    city,
    country,
    salePrice,
    price,
    attachments,
    category,
  } = data;

  return (
    <Container>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
      <Wrapper>
        <div className="subTitle inline">
          {name} {description}
        </div>
        <Info>
          {address}, {region}, {city}, {country} - {category?.name}
        </Info>
        <IconsWrapper>
          <IconsWrapper.Info>
            <Icons.Bed />{" "}
            <div className="info">Beds {houseDetails?.beds || 0}</div>
          </IconsWrapper.Info>
          <IconsWrapper.Info>
            <Icons.Bath />{" "}
            <div className="info">Baths {houseDetails?.bath || 0}</div>
          </IconsWrapper.Info>
          <IconsWrapper.Info>
            <Icons.Garage />{" "}
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </IconsWrapper.Info>
          <IconsWrapper.Info>
            <Icons.Metrics />
            <div className="info">Sq Ft {houseDetails?.area || 0}</div>
          </IconsWrapper.Info>
        </IconsWrapper>
      </Wrapper>
      <Footer>
        <IconsWrapper footer="true">
          <Info nopadding="true">${salePrice || 0}/month</Info>
          <div className="subTitle">${price || 0}/month</div>
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
