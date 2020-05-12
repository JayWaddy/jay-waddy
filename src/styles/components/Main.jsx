import style, { css } from 'styled-components';
import { colors } from '../global';

const jostBlack = require('../../fonts/Jost-Black.ttf');
const jostBlackItalic = require('../../fonts/Jost-BlackItalic.ttf');
const jostRegular = require('../../fonts/Jost-Regular.ttf');

export const Container = style.div`
    @font-face {
        font-family: 'Jost';
        src: url(${jostBlack});
        font-weight: bold;
    }

    @font-face {
        font-family: 'Jost';
        src: url(${jostBlackItalic});
        font-weight: bold;
        font-style: italic;
    }

    @font-face {
        font-family: 'Jost';
        src: url(${jostRegular});
        font-weight: normal;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    overflow: hidden;

    color: white;

    p, button, h1, h2, a, div {
        font-family: 'Jost';
    }

    ul, li {
        list-style: none;
    }

    h1 {
        margin: 25px;
        text-align: center;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    }

    .wrapper {
        width: 400px;
    }
`;

export const Button = style.button`
    width: 100%;

    margin: 5px;
    padding: 25px;
    border-radius: 3px;
    border: none;

    ${props => props.primary && css`
        background: ${colors.magenta};
        color: ${colors.white};
    `}

    &:hover {
        cursor: pointer;
    }
`;