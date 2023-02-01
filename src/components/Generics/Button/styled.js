import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        color: "#ffffff",
        border: "1px solid #ffffff",
      };
    case "light":
      return {
        background: "#ffffff",
        color: "#0D263B",
        border: "1px solid #E6E9EC",
      };
    case "primary":
      return {
        background: "#0061DF",
        color: "#ffffff",
        border: "1px solid #0061DF",
      };
    default:
      return {
        background: "#0061DF",
        color: "#ffffff",
        border: "1px solid #0061DF",
      };
  }
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  ${getType}
  cursor: pointer;
  :active {
    opacity: 0.7;
  }
`;

export { Container };
