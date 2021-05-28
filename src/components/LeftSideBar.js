import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const LeftSideBarStyle = styled.div`
    position: fixed;
    box-shadow: 1px 1px 0px 1px #8a8989;
    width: 15%;
    top: 152px;
    bottom: 0;
`;

const MenuOptionsStyle = styled.div`
    padding: 30px 30px;
    box-shadow: inset 1px -1px 1px 1px #8a8989;
    cursor: pointer;
    overflow-x: hidden;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #d8d4d4;
    }
`;

const LeftSideBar = () => {
    return (
        <LeftSideBarStyle>
            <Nav>
                <MenuOptionsStyle></MenuOptionsStyle>
                <MenuOptionsStyle></MenuOptionsStyle>
            </Nav>
        </LeftSideBarStyle>
    );
};

export default LeftSideBar;