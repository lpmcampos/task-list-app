import React from 'react';
import styled from 'styled-components';

const HomePageStyle = styled.div`
    margin-left: 275px;
    margin-top: 25px;
`;

const HomePage = () => (
  <HomePageStyle>
    <h1>Home Page</h1>
    <p>Hi There! This is the <a href="">Home</a> page.</p>
    <p>Not many options around here... though! :)</p>
    <p>Why don't you check the task list in the <a href="">Tasks</a> page?</p>
  </HomePageStyle>
)

export default HomePage;