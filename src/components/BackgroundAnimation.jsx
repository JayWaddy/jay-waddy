import React from 'react';
import styled from 'styled-components';

// Components
import background from '../img/background.png';

// Style
import { FullWidth } from './Global';

const Content = styled.div`
    height: 160px;

    background-image: url( ${ background } );
    background-size: 100px 160px;
    background-repeat: repeat-x;
    opacity: 0.5;

    animation: scroll 3000ms linear infinite;

    @keyframes scroll {
        from {
            background-position-x: -100px;
        }
        to {
            background-position-x: 0;
        }
    }
`;

export default function BackgroundAnimation() { 
    return (
        <FullWidth>
            <Content />
        </FullWidth>
    );
}
