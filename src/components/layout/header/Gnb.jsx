import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Gnb = () => {
    const location = useLocation();

    return (
        <GnbWapper>
            <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">홈</Link>
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">소개</Link>
                </li>
            </ul>
        </GnbWapper>
    );
};

const GnbWapper = styled.nav`
    ul {
        li {
            margin-left: 10px;
            a {
                color: #333;
                &:hover {
                    color: #ffaad2;
                    font-weight: 700;
                }
            }
        }
    }
    &.active {
        // Add styles for the active state
        color: #ffaad2;
        font-weight: 700;
    }
`;

export default Gnb;
