import styled, { css } from "styled-components";
import { MdPlaylistAdd } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
// import { MdPlaylistAddCircle } from "react-icons/md";

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
Icons.AddTodo = styled(MdPlaylistAdd)`
  ${cmn};
  cursor: ${({ notallowed }) => notallowed && "not-allowed"};
  :active {
    transform: ${({ notallowed }) => notallowed && "scale(1)"};
  }
  color: ${({ notallowed }) => (notallowed ? "#cf142b" : "#0d263b")};
  background: ${({ notallowed }) => (notallowed ? "#fff" : "#fff")};
  margin-left: 10px;
  border: ${({ notallowed }) =>
    notallowed ? "3px solid #fff" : "3px solid #fff"};

  :hover {
    color: ${({ notallowed }) => (notallowed ? "#fff" : "#fff")};
    background: ${({ notallowed }) => (notallowed ? "#cf142b" : "#0d263b")};
    border: ${({ notallowed }) =>
      notallowed ? "3px solid #cf142b" : "3px solid #fff"};
  }
`;

Icons.Done = styled(MdOutlineDownloadDone)`
  ${cmn};
  padding: 2px;
  color: #b8ff06;
  border: 3px solid #b8ff06; ;
`;

Icons.AddBtn = styled(MdPlaylistAdd)`
  ${cmn};
  margin: auto;
  border-radius: 50px;
  color: #0d263b;
  background: #fff;
  border: ${({ small }) =>
    small ? "1px dashed #0d263b" : "10px dashed #0d263b"};
  /* :hover {
    color: #b8ff06;
    background: #0d263b;
    border: 10px dashed #b8ff06;
  } */
`;

export { Modal, Container, FooterNote, Icons, Form, Input };

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
