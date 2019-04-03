import React from "react";
import styled from "@emotion/styled";
import UnderConstruction from "./UnderConstruction";

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconLink = styled.a`
  color: grey;
  margin: 0px 8px;
  font-size: 2em;
  &:hover {
    color: #94d0ff;
  }
  transition: all 0.2s ease 0s;
`;

const About = props => {
  return (
    <>
      <IconsContainer>
        <IconLink href="https://github.com/zdurham">
          <i className="fab fa-github-square" />
        </IconLink>
        <IconLink href="mailto:zdurham101@gmail.com">
          <i class="far fa-envelope" />
        </IconLink>
      </IconsContainer>
      <UnderConstruction />
    </>
  );
};

export default About;
