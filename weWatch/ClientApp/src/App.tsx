import React from "react";
import styled from "styled-components";
import { routes } from './routes';
import { Router } from 'react-router-dom';
import { history } from './components/history';

import "./styleHelpers/normalize.css";

const Container = styled.div`
  margin: 0 auto;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 900;
`;

const Button = styled.button`
  padding: 15px 20px;
  background: #4080f7;
  color: white;
  border-radius: 5px;
`;

function App() {
  return (
    <>
      <Router history={history}>{routes}</Router>
    </>
  );
}

export default App;
