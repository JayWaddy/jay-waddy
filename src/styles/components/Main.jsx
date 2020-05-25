import styled, { css } from 'styled-components';
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

export const SiteContainer = styled.div`
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
    background: ${ colors.background };

    p, h1, h2, a, div, small {
        font-family: 'Jost';
        text-decoration: none;
        text-align: left;
        color: white;
    }

    p {
        font-size: 16px;
    }

    ul, li {
        list-style: none;

        a {
            opacity: 0.75;
        }
    }

    h1 {
        margin-bottom: 10px;
        font-size: 34px;
        font-weight: normal;
    }
`;

export const PageContainer = styled.section`
    display: flex;
    flex-direction: column;

    width: ${ containerWidth }px;
    height: 100vh;
    margin: 0 auto;
`;

export const PageContent = styled.main`
    display: flex;
    flex-direction: column;

    margin: 100px auto auto auto;
    width: ${ contentWidth }px;
    overflow: hidden;
`;

// Home and 404 page will use this
export const PageContentCenter = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: ${ contentWidth }px;
    margin: auto;
`;

// Button
export const Button = styled.button`
    position: relative;
    width: ${ contentWidth - widthDiff }px;

    margin: 5px 0;
    padding: 20px;
    border-radius: 3px;
    border: none;

    span {
        position: relative;
        color: black !important;
        z-index: 2;
    }

    ${props => props.primary && css`
        &::after {
            position: absolute;
            top: 0;
            left: 0;

            content: '';
            padding: 29px 112px;
            border-radius: 3px;
            background: ${ colors.cyan };
        }

        &::before {
            position: absolute;
            top: 0;
            left: 0;

            content: '';
            padding: 29px 109px;
            border-radius: 3px;
            background: ${ colors.yellow };
            z-index: 1;
        }

        background: ${ colors.magenta };
        color: white;
    `}

    ${props => props.secondary && css`
        background: white;
        color: black !important;
    `}

    &:hover {
        cursor: pointer;
    }
`;