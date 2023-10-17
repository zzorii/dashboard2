import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsBarChartFill } from 'react-icons/bs';

const Gnb = () => {
    const location = useLocation();

    return (
        <GnbWapper>
            <ul>
                <li>
                    <Link to="/">
                        <AiFillHome /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <AiOutlineShoppingCart />
                        NFT Marketplace
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <BsBarChartFill />
                        Tables
                    </Link>
                </li>
                <li>
                    <Link to="#">Kanban</Link>
                </li>
                <li>
                    <Link to="#">Profile</Link>
                </li>
                <li>
                    <Link to="#">Sign in</Link>
                </li>
            </ul>

            {/* <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">홈</Link>
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">소개</Link>
                </li>
            </ul> */}
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
