import React, { memo } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const NavBar = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 55px;
  background: transparent;
  padding: 0px 20px;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: outside none none;
  flex-direction: horizontal;
  > li {
    text-align: center;
  }
`;

const NavButton = styled(Link)`
  font-family: "Raleway";
  color: grey;
  text-align: center;
  font-size: 16px;
  transition: all 0.3s ease 0s;
  margin: 0px 5px;
  text-transform: uppercase;
  letter-spacing: 5px;
  padding: 12px;
  &:hover {
    border-bottom: 5px solid #94d0ff;
  }
  text-decoration: none !important;
`;

const Nav = props => {
  return (
    <NavBar>
      <List>
        <li>
          <NavButton to="/">About</NavButton>
        </li>
        <li>
          <NavButton to="/cats">Cats</NavButton>
        </li>
        <li>
          <NavButton to="/contact">Contact</NavButton>
        </li>
      </List>
    </NavBar>
  );
};

export default memo(Nav);
