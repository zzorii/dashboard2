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
                <li className="active">
                    <Link to="/">
                        <AiFillHome /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/market">
                        <AiOutlineShoppingCart />
                        NFT Marketplace
                    </Link>
                </li>
                <li>
                    <Link to="/tables">
                        <BsBarChartFill />
                        Tables
                    </Link>
                </li>
                <li>
                    <Link to="/kanban">
                        <BsBarChartFill /> Kanban
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <BsBarChartFill /> Profile
                    </Link>
                </li>
                <li>
                    <Link to="/signin">
                        <BsBarChartFill /> Sign in
                    </Link>
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
            &.active a {
                color: var(--primary-dark);
                font-weight: 700;
            }
            a {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 16px 0;
                color: var(--secondary-grey-600);
                font-weight: 500;
                &:hover {
                    color: var(--primary-dark);
                }
            }
            svg {
                font-size: 20px;
            }
        }
    }
`;

export default Gnb;
