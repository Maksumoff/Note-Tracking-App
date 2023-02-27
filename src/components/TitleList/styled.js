import styled, { css } from "styled-components";

const common = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border-bottom: 1px solid #0d263b; */
`;

const Container = styled.div`
  ${common};
  /* font-size: 30px; */
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
const InputWrapper = styled.div`
  display: flex;
  flex: ${({ flexEnd }) => (flexEnd ? "0" : "1")};
  justify-content: ${({ flexEnd }) => (flexEnd ? "flex-end" : "space-between")};
  margin: 2px;
  padding: 2px;
`;

const Input = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const Span = styled.span`
  display: flex;
  margin: 7px;
  padding: 7px;
  border-radius: 10px 5px;
  transition: all 0.2s ease-in-out;
  flex: ${({ textOverflow }) => textOverflow && "1"};
  width: ${({ textOverflow }) => textOverflow && "100%"};
  text-overflow: ${({ textOverflow }) => textOverflow && "ellipsis"};
  overflow: ${({ textOverflow }) => textOverflow && "hidden"};
  white-space: ${({ textOverflow }) => textOverflow && "nowrap"};
  cursor: ${({ textOverflow }) => (textOverflow ? "auto" : "pointer")};
  border: ${({ textOverflow }) =>
    textOverflow ? "none" : "1px solid #000000"};

  :active {
    transform: scale(${({ textOverflow }) => (textOverflow ? "1" : 0.7)});
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
  Container,
  WrapperMain,
  Button,
  ButtonWrapper,
  Wrapper,
  Input,
  InputWrapper,
  Span,
};
