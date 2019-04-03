import React from "react";
import styled from "@emotion/styled";

const FullWidthBanner = styled.div`
  height: 60px;
  width: 100%;
  text-align: center;
  margin-top: 60px;
  padding: 20px;
  background-image: linear-gradient(90deg, #94d0ff, #ff6ad5);

  > h2 {
    color: black;
    font-weight: 900;
  }
`;

const UnderConstruction = props => {
  return (
    <FullWidthBanner>
      <h2>Under Construction! Please come back later!</h2>
    </FullWidthBanner>
  );
};

export default UnderConstruction;
