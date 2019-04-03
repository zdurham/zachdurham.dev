import React from "react";
import styled from "@emotion/styled";

const GradientHeader = styled.h1`
  font-family: "Roboto", "sans-serif";
  font-weight: 900;
  margin: 0px 0px 8px 0px;
  font-size: 72px;
  background: -webkit-linear-gradient(45deg, #94d0ff, #ff6ad5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.hr`
  width: 80%;
  height: 2px;
  margin-left: auto;
  margin-right: auto;
  background-color: #94d0ff;
  border: none;
`;

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

const Landing = props => {
  return (
    <CenteredContainer>
      <GradientHeader>Zach Durham</GradientHeader>
      <Divider />
      <IconsContainer>
        <IconLink href="https://github.com/zdurham">
          <i className="fab fa-github-square" />
        </IconLink>
        <IconLink href="mailto:zdurham101@gmail.com">
          <i class="far fa-envelope" />
        </IconLink>
      </IconsContainer>
    </CenteredContainer>
  );
};

export default Landing;
