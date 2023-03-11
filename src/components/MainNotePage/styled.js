import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  align-items: stretch;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding: 10px;
  align-items: center;
`;

export { Container, Wrapper };
