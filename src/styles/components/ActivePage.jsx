import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../global';

const ActivePageContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;

    height: 100%;
    z-index: 10;
`;

const Dot = styled.div`
    width: 1px;
    border: solid ${ colors.white } 2px;
    border-radius: 50px;

    margin: 10px 0;
    padding: 5px;

    opacity: 0.5;
    transition: 0.3s;

    ${props => props.active === true && css`
        background: ${ colors.white };
        opacity: 1;
    `}
`;

export default function ActivePage({ page }) {
    return (
        <ActivePageContainer>
            <div>
                <Link to="/"><Dot active={page === 'Home' ? true : false}/></Link>
                <Link to="/projects"><Dot active={page === 'Projects' ? true : false}/></Link>
                <Link to="/about"><Dot active={page === 'About' ? true : false}/></Link>
                <Link to="/contact"><Dot active={page === 'Contact' ? true : false}/></Link>
            </div>
        </ActivePageContainer>
    )
}
