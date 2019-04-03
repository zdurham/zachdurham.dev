import React from "react";
import styled from "@emotion/styled";
import Nav from "./Nav";
import About from "./pages/About";
import UnderConstruction from "./pages/UnderConstruction";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Background = styled.div`
  padding: 20px;
  padding-top: 50px;
`;

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

const App = props => {
  return (
    <>
      <Background>
        <Router>
          <Nav />
          <CenteredContainer>
            <GradientHeader>Zach Durham</GradientHeader>
            <Divider />
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/cats" component={UnderConstruction} />
              <Route path="/contact" component={UnderConstruction} />
            </Switch>
          </CenteredContainer>
        </Router>
      </Background>
    </>
  );
};

export default App;
