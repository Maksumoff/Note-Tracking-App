import React from "react";
import { Outlet,  } from "react-router-dom";
import { Container, Link, Main, Section, Wrapper } from "./styled";
import navbar from "../../utils/navbar";

export const Navbar = () => {
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section>
            {navbar.map(({ path, title }, index) => {
              return (
               (
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
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};
export default Navbar;
