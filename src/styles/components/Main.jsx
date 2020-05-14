import style, { css } from 'styled-components';
import { colors } from '../global';

const jostBlack = require('../../fonts/Jost-Black.ttf');
const jostBlackItalic = require('../../fonts/Jost-BlackItalic.ttf');
const jostRegular = require('../../fonts/Jost-Regular.ttf');


export const widthDiff = 60;

export let containerWidth = 350;
export let contentWidth = containerWidth - widthDiff;


/*
 * Containers/wrappers
 */

export const SiteContainer = style.div`
    @font-face {
        font-family: 'Jost';
        src: url(${ jostBlack });
        font-weight: bold;
    }

    @font-face {
        font-family: 'Jost';
        src: url(${ jostBlackItalic });
        font-weight: bold;
        font-style: italic;
    }

    @font-face {
        font-family: 'Jost';
        src: url(${ jostRegular });
        font-weight: normal;
    }

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    background: ${ colors.black };

    p, button, h1, h2, a, div {
        font-family: 'Jost';
        font-size: 12px;
        text-decoration: none;
        text-align: center;
        color: white;
    }

    ul, li {
        list-style: none;

        a {
            opacity: 0.75;
        }
    }

    h1 {
        margin-bottom: 10px;
        font-size: 18px;
    }
`;

export const PageContainer = style.section`
    display: flex;
    flex-direction: column;

    width: ${ containerWidth }px;
    height: 100vh;
    margin: 0 auto;
`;

export const PageContent = style.main`
    display: flex;
    flex-direction: column;

    margin: 100px auto auto auto;
    width: ${ contentWidth }px;
`;

// Home and 404 page will use this
export const PageContentCenter = style.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: ${ contentWidth }px;
    margin: auto;
`;

/*
 * Page component styles
 */

export const Button = style.button`
    width: ${ contentWidth - widthDiff }px;

    margin: 5px 0;
    padding: 20px;
    border-radius: 3px;
    border: none;

    ${props => props.primary && css`
        background: ${ colors.magenta };
        color: ${ colors.white };
    `}

    ${props => props.secondary && css`
        background: ${ colors.white };
        color: ${ colors.black } !important;
    `}

    &:hover {
        cursor: pointer;
    }
`;