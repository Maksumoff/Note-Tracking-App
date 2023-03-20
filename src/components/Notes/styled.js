import styled, { css } from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineEditNote } from "react-icons/md";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineCancel } from "react-icons/md";

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
Icons.Details = styled(HiClipboardDocumentList)`
  ${cmn};
  padding: 4px;
  border: 1px solid #fff;
  :hover {
    color: #0d263b;
    background: #fff;
  }
`;
Icons.Close = styled(MdOutlineCancel)`
  ${cmn};
  color: #cf142b;
  background: #fff;
  :hover {
    color: #fff;
    background: #cf142b;
    margin-left: 15px;
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

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(13, 38, 59, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  width: 345px;
  min-height: 40px;
  gap: 15px;
  color: ${({ details }) => (details ? "#fff" : "#0d263b")};
  background: ${({ details }) => (details ? "#0d263b" : "#fff")};
  padding: 15px;
  border: 3px solid #fff;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  color: #cf142b;
  background: transparent;
  border: 5px solid #cf142b;
  border-radius: 15px;
  padding: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: #cf142b;
    color: #fff;
    border: 5px solid #cf142b;
  }
  :active {
    transform: scale(0.9);
  }
  :focus {
    outline: none;
    background: #cf142b;
    color: #fff;
    border: 5px solid #cf142b;
  }
`;

export {
  Container,
  FooterNote,
  Icons,
  IconsWrapper,
  Input,
  Modal,
  Wrapper,
  Button,
  TitleWrapper,
};
