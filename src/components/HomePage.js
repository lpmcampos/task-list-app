import React from 'react';
import styled from 'styled-components';

const HomePageStyle = styled.div`
    margin-left: 275px;
    margin-top: 25px;
    width: 75%;
`;

const HomePage = () => (
  <HomePageStyle>
    <h3>Home Page</h3>
    <hr></hr>
    <p>Hi There! This is the <b>Home</b> page.</p>
    <p>Not many options around here... though! :)</p>
    <p>Why don't you check the task list in the <b>Tasks</b> page?</p>
  </HomePageStyle>
)

export default HomePage;