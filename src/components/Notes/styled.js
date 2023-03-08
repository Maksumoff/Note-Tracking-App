import styled, { css } from "styled-components";
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

const cmn = css`
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: all ease-in-out 0.1s;
  :active {
    transform: scale(0.8);
  }
`;

Icons.Trash = styled(HiOutlineTrash)`
  ${cmn};
  color: #cf142b;
  background: #fff;
  :hover {
    background: rgba(207, 20, 43);
    color: #fff;
  }
`;

Icons.Edit = styled(MdOutlineEditNote)`
  ${cmn};
  color: #0d263b;
  background: #b8ff06;
  :hover {
    /* color: #ffffff;
    background: #0d263b; */
    /* background: #ffffff; */
  }
`;

Icons.Save = styled(MdOutlinePlaylistAddCheck)`
  ${cmn};
  padding: 1px;
  color: #b8ff06;
  border: 4px solid #b8ff06; ;
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
