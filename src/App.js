import React from 'react';
import styled from '@emotion/styled';
import Nav from './Nav';
import Landing from './pages/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const Background = styled.div`
  padding: 20px;
  padding-top: 50px;
`



const NameContainer = styled.div`

`

const App = (props) => {
  return (
    <>
    <Background>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </Router>
    </Background>
    </>
  )
    
}

export default App