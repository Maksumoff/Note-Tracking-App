import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-gap: 20px;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: var(--padding);
`;

export { Container, Wrapper };
