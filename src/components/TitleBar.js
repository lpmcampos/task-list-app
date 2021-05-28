import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const TitleBarStyle = styled.div`
    box-shadow: 0px 1px 0px 1px #8a8989;
    min-height: 150px;
`;

const TitleBar = () => {
  return (
    <TitleBarStyle>
      <Nav></Nav>
    </TitleBarStyle>
  );
};

export default TitleBar;