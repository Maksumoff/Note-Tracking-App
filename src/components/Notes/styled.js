import styled from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #696969;
  margin: 5px;
  padding: 20px;
`;

const FooterNote = styled.div``;

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

const Icons = styled.div``;
Icons.Trash = styled(HiOutlineTrash)`
  color: red;
`;

export { Container, FooterNote, Icons };
