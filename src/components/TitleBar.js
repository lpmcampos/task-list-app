import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const TitleBarStyle = styled.div`
    {
      box-shadow: 0px 1px 0px 1px #8a8989;
      min-height: 150px;
    }
    .nav {
      display: inline;
    }
    .text {
      padding-top: 40px;
      font-size: 50px;
      text-align: center;
    }
`;

const TitleBar = () => {
  return (
    <TitleBarStyle>
      <Nav>
        <h1 className="text">New App</h1>
      </Nav>
    </TitleBarStyle>
  );
};

export default TitleBar;