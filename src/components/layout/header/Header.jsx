import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// function Header() {}
const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>
                <Link to="/">logo</Link>
            </Logo>
        </HeaderWrapper>
    );
};

// const 변수명 = styled.태그명``;
const Logo = styled.h1`
    font-size: 30px;
    color: mintcream;
`;

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: #eee;
`;

export default Header;
