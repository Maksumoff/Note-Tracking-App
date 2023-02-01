import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Link, Logo, Main, Section, Wrapper } from "./styled";
import navbar from "../../utils/navbar";
import { Button } from "../Generics/Button";
import Filter from "../Filter";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section logo onClick={() => navigate("/home")}>
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ path, title, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type="dark">
              Sign In
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  );
};
export default Navbar;
