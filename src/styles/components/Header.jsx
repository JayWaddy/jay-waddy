import React from 'react';
import { Link } from 'react-router';
import style from 'styled-components';
import { colors } from '../global';

const Header = style.div`
    position: absolute;

    top: 50px;
    width: 100%;
    color: ${colors.white};

    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;

        li {
            margin: 0 15px;
            text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);

            &:hover {
                cursor: pointer;
            }
        }
    }
`;

function clicker() {
    console.log('clicked!');;
}

export default function Nav() {
    return(
        <Header className="wrapper">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Projecs</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </Header>
    );
}