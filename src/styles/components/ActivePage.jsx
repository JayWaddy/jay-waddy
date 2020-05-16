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

    ${props => props.active && css`
        background: ${ colors.white };
        opacity: 1;
    `}
`;

export default function ActivePage() {
    return (
        <ActivePageContainer>
            <div>
                <Link to="/"><Dot active="true"/></Link>
                <Link to="/projects"><Dot/></Link>
                <Link to="/about"><Dot/></Link>
                <Link to="/contact"><Dot/></Link>
            </div>
        </ActivePageContainer>
    )
}
