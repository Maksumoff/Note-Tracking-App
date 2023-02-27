import styled, { css } from "styled-components";

const common = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  ${common};
  font-size: 20px;
`;

const border = css`
  border: 2px solid white;
  border-radius: 25px 5px;
`;

const Wrapper = styled.div`
  ${common};
  padding: 0px 130px;
  max-width: 1440px;
  margin: auto;
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

const ButtonSt = styled.button`
  width: 80px;
  padding: 10px;
  color: #ffffff;
  background-color: #0d263b;
  /* #b8ff06  */
  ${border}
`;

const InputSt = styled.input`
  border: 1px solid #0d263b;
  margin: 10px;
  padding: 10px;
  border-radius: 15px 5px;
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  ButtonSt,
  ButtonWrapper,
  Wrapper,
  InputSt,
  Text,
};
