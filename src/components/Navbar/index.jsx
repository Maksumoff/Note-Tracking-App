import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Link, Logo, Section, Wrapper } from "./styled";
import navbar from "../../utils/navbar";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section logo onClick={() => navigate("/home")}>
          <Logo />
          <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map(({ path, title }, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}{" "}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>Sign In</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};
export default Navbar;
