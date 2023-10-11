import React from 'react';
import Layout from './components/layout/Layout';
import { Reset } from 'styled-reset';

function App() {
    return (
        <>
            <Reset />
            <Layout>이 글씨는 app.js에서 쓴 글</Layout>
        </>
    );
}

export default App;
