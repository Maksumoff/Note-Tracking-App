import styled from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";
import { MdPlaylistAdd } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
// import { MdOutlineDownloadDone } from "react-icons/md";

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

const FooterNote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icons = styled.div``;

Icons.Done = styled(MdOutlineDownloadDone)`
  color: #ffffff;
  cursor: pointer;
`;

Icons.AddBtn = styled(MdPlaylistAdd)`
  margin: auto;
  padding: 20px;
  cursor: pointer;
`;

const AddBtn = styled.button`
  background: transparent;
  border: none;
`;

const Plus = styled.h1`
  text-align: center;
  vertical-align: center;
  padding: 20px;
  font-size: 50px;
  font-weight: 900;
  border: 5px dashed #fff;
  background: transparent;
  color: #fff;
  cursor: pointer;
`;

export { Container, FooterNote, Icons, AddBtn, Plus };

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
