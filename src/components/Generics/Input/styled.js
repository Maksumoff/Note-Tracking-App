import styled from "styled-components";

const Container = styled.input`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  border: 1px solid #e6e9ec;
  outline: none;
  padding-right: 5px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex: 1;
`;

const Icon = styled.div`
  position: absolute;
  display: flex;
  left: 10px;
`;

export { Container, Wrapper, Icon };
