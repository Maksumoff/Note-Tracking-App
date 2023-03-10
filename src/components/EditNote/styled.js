import styled, { css } from "styled-components";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(13, 38, 59, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  background: #0d263b;
  padding: 12px;
  min-height: 200px;
  border: 3px solid #fff;
  border-radius: 20px;
  width: 330px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: ${({ close }) => (close ? "row" : "column")};
  justify-content: space-between;
  align-items: ${({ close }) => close && "center"};
`;

const InputField = styled.input`
  width: 90%;
  border: 3px solid #fff;
  border-radius: 9px 14px 9px 14px;
  background: transparent;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 7px;
  margin: 4px 2px;
  outline: #fff solid 2px;
  border: none;
  :focus {
    outline: #b8ff06 solid 2px;
    /* border: 3px solid #b8ff06; */
  }
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

Icons.Close = styled(MdOutlineCancel)`
  ${cmn};
  color: #cf142b;
  background: #fff;
  :hover {
    color: #fff;
    background: #cf142b;
  }
`;
Icons.Save = styled(MdOutlinePlaylistAddCheck)`
  ${cmn};
  padding: 1px;
  color: #b8ff06;
  border: 4px solid #b8ff06; ;
`;

export { Modal, Container, FooterNote, InputField, Icons, Form, Input };
