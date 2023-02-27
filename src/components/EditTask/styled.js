import styled, { css } from "styled-components";

const common = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #0d263b;
`;
const FormWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Container = styled.div`
  ${common};
  font-size: 30px;
`;

const border = css`
  border: 2px solid white;
  border-radius: 25px 5px;
`;

const Wrapper = styled.div`
  ${common};
`;

const WrapperMain = styled.div`
  ${common};
  font-size: 20px;
  border: 2px solid crimson;
  border-radius: 25px 5px;
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.button`
  width: 80px;
  padding: 10px;
  color: #ffffff;
  background-color: #0d263b;
  /* #b8ff06  */
  ${border}
`;
const Form = styled.form`
  display: flex;
  flex: 1;
`;

const Input = styled.input`
  flex: ${({ button }) => (button ? "0" : "1")};
  /* border: ${({ button }) =>
    button ? "3px solid blue" : "3px solid blue"}; */
  border: 3px solid #0d263b;
  margin: 10px 5px;
  padding: 10px;
  border-radius: 15px 5px;
  /* outline: 3px solid red; */
  cursor: ${({ button }) => button && "pointer"};
  transition: all 0.2s ease-in-out;
  :focus {
    outline: ${({ button }) => (button ? "none" : "3px solid red")};
    border: ${({ button }) => (button ? "3px solid #0d263b" : "none")};
    transform: scale(${({ button }) => button && 0.9});
  }
  :hover {
    border-radius: 5px 15px;
  }
`;

// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: var(--padding);
//   gap: 20px;
//   width: 100%;
//   max-width: 1440px;
// `;

export {
  FormWrapper,
  Form,
  Wrapper,
  Container,
  WrapperMain,
  Button,
  ButtonWrapper,
  Input,
};
