import styled, { css } from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineEditNote } from "react-icons/md";

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
`;

export { Container, FooterNote, Icons, IconsWrapper, Input };
