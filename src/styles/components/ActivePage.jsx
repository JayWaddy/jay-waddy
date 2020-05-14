import React from 'react';
import style, { css } from 'styled-components';

import { colors } from '../global';

const ActivePageContainer = style.div`
    position: absolute;
    display: flex;
    flex-direction; column;
    align-items: center;

    height: 100%;
`;

const Dot = style.div`
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
                <Dot active="true"/>
                <Dot />
                <Dot />
                <Dot />
            </div>
        </ActivePageContainer>
    )
}
