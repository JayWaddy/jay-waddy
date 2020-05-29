import styled, { createGlobalStyle } from 'styled-components';

// Fonts
const jostBlack = require('../fonts/Jost-Black.ttf');
const jostBlackItalic = require('../fonts/Jost-BlackItalic.ttf');
const jostRegular = require('../fonts/Jost-Regular.ttf');

// Global Variables
export let containerWidth = 350;
export const colors = {
    background: '#252525',
    navbar: '#3a3a3a'
}

// -----------------
// Global Components
// -----------------

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        position: relative;
        background: ${colors.background};
        overflow-x: hidden;
    }

    /*
     * ----------------------
     * Unique page animations
     * ----------------------
     */

    .PageLink-padding {
        display: flex;
        margin-top: 60px;

        a {
            margin-left: auto;
        }
    }
`;

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

    h2 {
        font-size: 22px;
        font-weight: normal;
    }
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: ${ containerWidth }px;
    height: 100%;
    margin: 0 auto;
`;

export const PageContent = styled.div`
    display: flex;
    flex-direction: column;

    margin: 50px auto auto auto;
    width: ${ containerWidth }px;
`;

export const FullWidth = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100px;
    margin-top: 60px;

    img, div {
        position: absolute;
        width: 100vw;
    }
`;