import React from 'react';
import styled from 'styled-components';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = (props) => {
    return (
        <Wrap>
            <Header />
            <main id="main">{props.children}</main>
            <Footer />
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    #main {
        flex: 1;
        padding: 20px;
    }
`;

export default Layout;
