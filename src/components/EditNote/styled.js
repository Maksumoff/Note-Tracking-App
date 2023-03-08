import styled, { css } from "styled-components";
import { MdPlaylistAdd } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

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
  width: 250px;
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

Icons.Done = styled(MdOutlineDownloadDone)`
  ${cmn};
  padding: 1px;
  color: #b8ff06;
  border: 4px solid #b8ff06; ;
`;

Icons.AddBtn = styled(MdPlaylistAdd)`
  margin: auto;
  padding: 20px;
  cursor: pointer;
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
