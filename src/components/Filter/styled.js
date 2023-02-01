import styled from "styled-components";
import { ReactComponent as house } from "../../assets/icons/house.svg";
import { ReactComponent as filter } from "../../assets/icons/filter.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--padding);
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Icons = styled.div``;

Icons.House = styled(house)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Search = styled(search)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 21px 14px 10px 14px;
  background: #fff;
  /* border: 1px solid #e6e9ec; */
`;
const Section = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
`;

export { Container, Icons, MenuWrapper, Section, Wrapper };
