import styled, { createGlobalStyle } from 'styled-components';

// Fonts
const jostBlack = require('../fonts/Jost-Black.ttf');
const jostBlackItalic = require('../fonts/Jost-BlackItalic.ttf');
const jostRegular = require('../fonts/Jost-Regular.ttf');

// Global Variables
export const containerWidth = 350 + 'px';
export const tabletContainerWidth = '70%';
export const desktopContainerWidth = 1000 + 'px';

export const tabletBreakPoint = 700 + 'px';
export const desktopBreakPoint = 1100 + 'px';

export const colors = {
    background: '#1f1f1f',
    navbar: '#2f2f2f'
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
        width: 100vw;
        background: ${colors.background};
        overflow-x: hidden;
    }

/* -----------------*
 * Main Page Styles *
 * -----------------*/   

.Page__Home,
.Page__Work,
.Page__About,
.Page__Contact,
.Page__404 {
    position: absolute;
    width: ${ containerWidth };
}

.Page--exit-active {
    opacity: 0;
    /* transform: translateY(50%); */
    transition: 300ms ease;
}

.Page--enter {
    opacity: 0;
    /* transform: translateY(-50%); */
}

.Page--enter-active {
    opacity: 1;
    /* transform: translateY(0); */
    transition: 300ms ease;
    transition-delay: 200ms;
}

/* -----------------------*
 * Unique Component Styles *
 * -----------------------*/

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

    position: relative;
    display: flex;
    justify-content: center;
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

    @media only screen and (min-width: ${ tabletBreakPoint }) {
        .Page-container {
            width: ${ tabletContainerWidth };
        }
        .Page-content {
            width: 100%;
        }
    }

    @media only screen and (min-width: ${ desktopBreakPoint }) {
        .Page-container {
            width: ${ desktopContainerWidth };
        }
        .Page-content {
            width: 100%;
        }
    }

    .Page {
        @media only screen and (min-width: 700px) {
            width: 100%;
            margin: 80px auto auto auto;

            section {
                width: ${ tabletContainerWidth };
            }
        }

        @media only screen and (min-width: ${ desktopBreakPoint }) {
            width: 100%;
            margin: 100px auto auto auto;

            section {
                width:  ${ desktopContainerWidth };
            }
        }
    }
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: ${ containerWidth };
    height: 100%;
    margin: 0 auto;
`;

export const PageContent = styled.div`
    display: flex;
    flex-direction: column;

    margin: 50px auto auto auto;
    width: ${ containerWidth };
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