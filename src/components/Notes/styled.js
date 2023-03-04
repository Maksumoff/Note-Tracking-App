import styled from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineEditNote } from "react-icons/md";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  background: #0d263b;
  padding: 12px;
  min-height: 200px;
  border-radius: 20px;
`;

const Input = styled.input`
  cursor: not-allowed;
  margin-right: 5px;
`;

const FooterNote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icons = styled.div``;

Icons.Trash = styled(HiOutlineTrash)`
  color: #ffffff;
  cursor: pointer;
`;

Icons.Edit = styled(MdOutlineEditNote)`
  color: #ffffff;
  cursor: pointer;
`;

Icons.Save = styled(MdOutlinePlaylistAddCheck)`
  color: #ffffff;
  cursor: pointer;
`;

export { Container, FooterNote, Icons, IconsWrapper, Input };

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
