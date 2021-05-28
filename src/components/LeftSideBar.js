import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { LinkContainer } from 'react-router-bootstrap'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const LeftSideBarStyle = styled.div`
    position: fixed;
    box-shadow: 1px 1px 0px 1px #8a8989;
    min-width: 15%;
    top: 152px;
    bottom: 0;
`;

const MenuOptionsStyle = styled.div`
    padding: 20px 20px;
    width: 100%;
    box-shadow: inset 1px -1px 1px 1px #8a8989;
    cursor: pointer;
    overflow-x: hidden;
    text-align: center;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #d8d4d4;
    }
`;

const LeftSideBar = () => {
    return (
        <LeftSideBarStyle>
            <Nav>
                <MenuOptionsStyle>
                    <LinkContainer to="/home">
                        <Nav.Link className='text'>Home</Nav.Link>
                    </LinkContainer>
                </MenuOptionsStyle>
                <MenuOptionsStyle>
                    <LinkContainer to="/tasks">
                        <Nav.Link>Tasks</Nav.Link>
                    </LinkContainer>
                </MenuOptionsStyle>
            </Nav>
        </LeftSideBarStyle>
    );
};

export default LeftSideBar;