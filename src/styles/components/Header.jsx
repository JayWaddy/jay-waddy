import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';
import { colors } from '../global';

import { containerWidth } from '../../styles/components/Main';
import ActivePage from './ActivePage';

import logo from '../../../src/img/logo.svg';

/*
 * Unique component styles
 */

const Header = style.div`
    position: absolute;
    display: flex;

    bottom: 50px;
    width: ${containerWidth}px;
    color: ${colors.white};

    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;

        margin: auto;

        li {
            margin: 0 15px;

            &:hover {
                cursor: pointer;
            }
        }
    }
`;

export const Logo = style.img`
    position: absolute;
    top: 20px;
    
    width: 30px;
`;

const PageTitle = style.p`
    position: absolute;
    top: 20px;

    margin-left: 50px;
`;

export default function Nav() {
    return(
        <>
        <Logo src={logo} />
        <PageTitle>Page Title</PageTitle>
        <Header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </Header>
        <ActivePage/>
        </>
    );
}