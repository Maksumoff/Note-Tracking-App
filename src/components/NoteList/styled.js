import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  /* grid-template-columns: repeat(4, 250px); */
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
`;

// const Wrapper = styled.div`
//   display: grid;
//   grid-auto-flow: row;
//   grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
//   grid-gap: 20px;
//   max-width: 1440px;
//   width: 100%;
//   margin: auto;
//   padding: var(--padding);
//   padding-bottom: 20px;
//   box-sizing: border-box;
//   margin: auto;
// `;

export { Container, ListWrapper };
