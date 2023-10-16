import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Gnb from './Gnb';
import { Heading } from '@chakra-ui/react';

const Header = () => {
    return (
        <HeaderWapper>
            <HeaderStyle as="h1" className="logo">
                <Link to="/">logo</Link>
            </HeaderStyle>
            <Gnb />
        </HeaderWapper>
    );
};

const HeaderStyle = styled(Heading)`
    /* font-size: 1rem; */
    /* color: var(--white); */
`;

const HeaderWapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: var(--primary);
    width: 100px;
    padding: 30px;
`;

export default Header;
