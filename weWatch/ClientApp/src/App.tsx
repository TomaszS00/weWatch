import React from "react";
import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";

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
    <BrowserRouter>
      <Container>
        <header className="App-header">
          <H1>Hello, World!</H1>
          <Link to={{ pathname: "https://kwejk.pl/losowy" }} target="_blank">
            <Button>see random meme</Button>
            <p>Test!</p>
          </Link>
        </header>
      </Container>
    </BrowserRouter>
  );
}

export default App;
