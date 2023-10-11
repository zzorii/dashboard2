import React from 'react';
import styled from 'styled-components';

// function Header() {}
const Header = () => {
    return (
        <HeaderWrapper>
            <h1>header</h1>
        </HeaderWrapper>
    );
};

// const 변수명 = styled.태그명``;
const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: #eee;
`;

export default Header;
