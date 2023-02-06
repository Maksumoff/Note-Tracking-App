import styled, { css } from "styled-components";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as metrics } from "../../assets/icons/metric.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as expand } from "../../assets/icons/expand.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

const Container = styled.div`
  width: 380px;
  height: 429px;
  margin: 50px;
  border: 1px solid coral;
`;

const Img = styled.img`
  width: 100%;
  max-height: 218px;
`;

const Wrapper = styled.div`
  /* border-top: 1px solid #c8c8c8; */
  padding: 22px 20px 0px;
  background: white;
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "column" : "row")};
  justify-content: space-between;
  /* align-items: center; */
`;
const common = css`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--colorSecondary);
`;

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  ${common};
  font-size: 12px;
  padding-bottom: ${({ nopadding }) => (nopadding ? "0px" : "15px")};
  text-decoration-line: ${({ nopadding }) => nopadding && "line-through"};
`;

IconsWrapper.Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Metrics = styled(metrics)``;
Icons.Expand = styled(expand)`
  margin-right: 10px;
  padding: 11px 10px;
`;
Icons.Love = styled(love)`
  padding: 11px 10px;
  margin-right: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e6e9ec;
  padding: 8px 0px 4px 20px;
`;

export { Container, Img, Wrapper, IconsWrapper, Icons, Footer, Info };
