import React from 'react';
import Layout from './components/layout/Layout';
import { Reset } from 'styled-reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import GlobalStyles from './styles/GlobalStyles.styles';
import './App.css';

function App() {
    return (
        <>
            <Reset />
            <GlobalStyles />
            <Layout>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </Layout>
        </>
    );
}

export default App;
