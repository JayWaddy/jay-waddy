import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

// Images
import logo from '../img/logo.svg';
import rightArrow from '../img/arrow_right.svg';

// Variaables
import { 
    colors, 
    containerWidth, 
    tabletContainerWidth, 
    tabletBreakPoint,
    desktopContainerWidth,
    desktopBreakPoint
} from './Global';
const duration = 300 + 'ms';
const easeQubic = 'cubic-bezier(0.87, 0, 0.13, 1)';
const easeOut = 'cubic-bezier(0.16, 1, 0.3, 1)';

// Unique Styles
const NavbarContainer = styled.header`
    position: fixed;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 75px;
    z-index: 10;

    background: ${ colors.navbar };

    @media only screen and (min-width: ${ tabletBreakPoint }) {
        top:0;
    }

    @media only screen and (min-width: ${ desktopBreakPoint }) {
        background: transparent;
    }

/* -------------------*
 * .Next-page--appear *
 * -------------------*/

.Next-page--appear {
    opacity: 0;
    transform: translateX(-20px);
}

.Next-page--appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: ${ duration } ease;
    transition-delay: 0;
}

/* ------------------*
 * .Next-page--enter *
 * ------------------*/

.Next-page--enter {
    opacity: 0;
    transform: translateX(-20px);
    img {
        opacity: 0;
    }
}

.Next-page--enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: ${ duration } ease;

    img {
        opacity: 1;
    }
}

.Next-page--enter-done {
    img {
        opacity: 1;
        transition: ${ duration } ease;
    }
}

/* -----------------*
 * .Next-page--exit *
 * -----------------*/

.Next-page--exit {
    opacity: 1;

    img {
        opacity: 1;
    }
}

.Next-page--exit-active {
    opacity: 0;
    transform: translateX(20px);
    transition: ${ duration } ease;
    transition-delay: 0;

    img {
        opacity: 0;
        transition: ${ duration } ease;
    }
}
/* End of .Next-Page -------------------------------- */

/* ------------------*
 * Menu-icon--appear *
 * ------------------*/

.Menu-icon--appear {
    .Menu-icon__open::before {
        background: transparent;
        transform: translate(-20px, -8px);
    }
    .Menu-icon__open {
        background: transparent;
        transform: translate(20px, 0);
    }
    .Menu-icon__open::after {
        background: transparent;
        transform: translate(20px, 8px);
    } 
}

.Menu-icon--appear-active {
    .Menu-icon__open::before {
        background: white;
        transform: translate(0, -8px);
        transition: ${duration} ${ easeQubic };
        transition-delay: 0;
    }
    .Menu-icon__open {
        background: white;
        transform: translate(0, 0);
        transition: ${duration} ${ easeQubic };
        transition-delay: 100ms;
    }
    .Menu-icon__open::after {
        background: white;
        transform: translate(0, 8px);
        transition: ${duration} ${ easeQubic };
        transition-delay: 200ms;
    }
}

/* -----------------*
 * Menu-icon--enter *
 * -----------------*/

.Menu-icon--enter {
    .Menu-icon__open::before {
        background: white;
        transform: rotate(45deg);
    }
    .Menu-icon__open {
        background: transparent;
        transform: translate(20, 0);
    }
    .Menu-icon__open::after {
        background: white;
        transform: rotate(-45deg);
    }
}

.Menu-icon--enter-active {
    .Menu-icon__open::before {
        background: white;
        transform: translate(0, -8px);
        transition: ${duration} ${ easeQubic };
        transition-delay: 0;
    }
    .Menu-icon__open {
        background: white;
        transform: translate(0, 0);
        transition: ${duration} ease-out;
        transition-delay: 100ms;
    }
    .Menu-icon__open::after {
        background: white;
        transform: translate(0, 8px);
        transition: ${duration} ${ easeQubic };
        transition-delay: 100ms;
    }
}

/* ----------------*
 * Menu-icon--exit *
 * ----------------*/
    
.Menu-icon--exit {
    .Menu-icon__open::before {
        background: white;
        transform: translate(0, -8px);
    }
    .Menu-icon__open {
        background: white;
        transform: translate(0, 0);
    }
    .Menu-icon__open::after {
        background: white;
        transform: translate(0, 8px);
    }
}

.Menu-icon--exit-active {
    .Menu-icon__open::before {
        background: white;
        transform: rotate(45deg);
        transition: ${duration} ${ easeQubic };
        transition-delay: 0;
    }
    .Menu-icon__open {
        background: transparent;
        transform: translate(20, 0);
        transition: ${duration} ease-out;
        transition-delay: 100ms;
    }
    .Menu-icon__open::after {
        background: white;
        transform: rotate(-45deg);
        transition: ${duration} ${ easeQubic };
        transition-delay: 100ms;
    }
}

.Menu-icon--exit-done {
    .Menu-icon__open::before {
        background: white;
        transform: rotate(45deg);
    }
    .Menu-icon__open {
        background: transparent;
        transform: translate(20, 0);
    }
    .Menu-icon__open::after {
        background: white;
        transform: rotate(-45deg);
    }
}

/* End of .Menu-icon ------------------------------ */

/* ---------------------------*
 * .Navbar-background--appear *
 * ---------------------------*/
.Navbar-background--appear {
    transform: translateX(0);
}

.Navbar-background--appear-active {
    transform: translateX(100%);
    transition: transform ${ duration } cubic-bezier(0.87, 0, 0.13, 1);
}

.Navbar-background--appear-done {
    transform: translateX(100%);
}

/* --------------------------*
 * .Navbar-background--enter *
 * --------------------------*/
.Navbar-background--enter {
    transform: translateX(100%);
}

.Navbar-background--enter-active {
    transform: translateX(0);
    transition: transform ${ duration } cubic-bezier(0.87, 0, 0.13, 1);
}

/* -------------------------*
 * .Navbar-background--exit *
 * -------------------------*/
.Navbar-background--exit {
    transform: translateX(0);
}

.Navbar-background--exit-active {
    transform: translateX(100%);
    transition: transform ${ duration } cubic-bezier(0.87, 0, 0.13, 1);
    transition-delay: 200ms;
}
/* End of .Navbar-background ---------- */

/* --------------------------*
 * .Nav-menu--enter *
 * --------------------------*/
.Nav-menu--enter {
    ul li {
        &:nth-child(1){
            opacity: 0;
            transform: translateY(-20px);
        }
        &:nth-child(2){
            opacity: 0;
            transform: translateY(-20px);
        }
        &:nth-child(3){
            opacity: 0;
            transform: translateY(-20px);
        }
        &:nth-child(4){
            opacity: 0;
            transform: translateY(-20px);
        }
    }
}

.Nav-menu--enter-active {
    ul li {
        &:nth-child(1){
            opacity: 1;
            transform: translateY(0);
            transition: opacity ${ duration } ease-out, transform ${ duration } ${ easeOut };
            transition-delay: 250ms;
        }
        &:nth-child(2){
            opacity: 1;
            transform: translateY(0);
            transition: opacity ${ duration } ease-out, transform ${ duration } ${ easeOut };
            transition-delay: 200ms;
        }
        &:nth-child(3){
            opacity: 1;
            transform: translateY(0);
            transition: opacity ${ duration } ease-out, transform ${ duration } ${ easeOut };
            transition-delay: 150ms;
        }
        &:nth-child(4){
            opacity: 1;
            transform: translateY(0);
            transition: opacity ${ duration } ease-out, transform ${ duration } ${ easeOut };
            transition-delay: 100ms;
        }
    }
}

/* --------------------------*
 * .Nav-menu--enter *
 * --------------------------*/
.Nav-menu--exit-active {
    ul li {
        &:nth-child(1){
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 100ms ease-in, transform ${ duration } ${ easeOut };
            transition-delay: 100ms;
        }
        &:nth-child(2){
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 100ms ease-in, transform ${ duration } ${ easeOut };
            transition-delay: 150ms;
        }
        &:nth-child(3){
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 100ms ease-in, transform ${ duration } ${ easeOut };
            transition-delay: 200ms;
        }
        &:nth-child(4){
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 100ms ease-in, transform ${ duration } ${ easeOut };
            transition-delay: 250ms;
        }
    }
}
/* End of .Nav-menu ---------- */
`;

const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${ containerWidth };
    height: 20px;

    .Nav-menu {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;

        li {
            margin: 0 15px;
        }
    }

    @media only screen and (min-width: ${ tabletBreakPoint }) {
        width: ${ tabletContainerWidth };
    }

    @media only screen and (min-width: ${ desktopBreakPoint }) {
        width: ${ desktopContainerWidth };
    }
`;

const Logo = styled.div`
    position: absolute;
    left: 0;
    top: 0;
`;

const NavMenu = styled.nav`
    position: absolute;
    z-index: 10;

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;

        li {
            margin: 0 15px;
        }
    }
`;

const NextPage = styled.div`
    position: absolute;
    display: flex;

    span {
        margin: 0 10px;
    }

    img {
        opacity: 0;
    }
`;

const MenuIcon = styled.div`
    position: absolute;
    right: 0;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 20px;
    cursor: pointer;

    .Menu-icon__open {
        width: 20px;
        height: 2px;

        background: white;
        content: '';

        &::before, &::after {
            position: absolute;

            width: 20px;
            height: 1.5px;

            background: white;
            content: '';
        }

        &::before {
            transform: translateY(-8px);
        }

        &::after {
            transform: translateY(8px);
        }
    }
`;

const NavbarBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';

    background: black;
`;

// --------------
// Default Export
// --------------

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            activePage: '',
            nextPage: {
                path: '',
                message: ''
            }
        }
    }

    pages = {
        home: {
            path: '/',
            name: 'home',
            message: 'Back to home page'
        },
        work: {
            path: '/work',
            name: 'work',
            message: 'Explore work'
        },
        about: {
            path: '/about',
            name: 'about',
            message: 'Get to know me'
        },
        contact: {
            path: '/contact',
            name: 'contact',
            message: 'Let\'s team up'
        },
        pageNotFound: {
            path: null,
            name: '404',
            message: null
        }
    }

    pageList = [
        this.pages.home.name,
        this.pages.work.name,
        this.pages.about.name,
        this.pages.contact.name
    ];

    setPageProps = () => {
        if (window.location.pathname === this.pages.home.path) {
            this.setState({ 
                activePage: this.pages.home.name,
                nextPage: {
                    path: this.pages.work.path,
                    message: this.pages.work.message
                }
            });
            return this.state.nextPage.message;
        } else if (window.location.pathname === this.pages.work.path) {
            this.setState({ 
                activePage: this.pages.work.name,
                nextPage: {
                    path: this.pages.about.path,
                    message: this.pages.about.message
                }
            });
        } else if (window.location.pathname === this.pages.about.path) {
            this.setState({ 
                activePage: this.pages.about.name,
                nextPage: {
                    path: this.pages.contact.path,
                    message: this.pages.contact.message
                }
            });
        } else if (window.location.pathname === this.pages.contact.path) {
            this.setState({ 
                activePage: this.pages.contact.name,
                nextPage: {
                    path: this.pages.work.path,
                    message: this.pages.work.message
                }
            });
        } else {
            this.setState({ 
                activePage: this.pages.pageNotFound.name,
                nextPage: {
                    path: this.pages.home.path,
                    message: this.pages.home.message
                }  
            });
        }
    }

    setPages = () => {
        // Will set page props AFTER a link has been clicked
        setTimeout(() => this.setPageProps(), 1);
    }

    menuClick = () => {
        this.toggleMenu();
        this.setPages();
    }

    toggleMenu = () => {
        this.setState(
            { 
                toggle: !this.state.toggle
             }
        );
    }

    menuItems = this.pageList.map(page => (
        <li>
            <NavLink 
            to={{ 
                pathname: page && page !== 'home' ? page : '/',
                state: this.pages
            }}
            onClick={ this.menuClick }
            >
                { page.charAt(0).toUpperCase() + page.slice(1) }
            </NavLink>
        </li>
    ));
    
    componentDidMount() {
        this.setPageProps();
    }

    render() {
        return (
            <NavbarContainer className="Navbar">
                <Content >
                
                   { /* Logo component */}

                    <NavLink to="/">
                        <Logo>
                            <img 
                            src={ logo } 
                            alt="logo"
                            onClick={ this.setPages }
                            />
                        </Logo>
                    </NavLink>

                    { /* Navbar__menu component */}

                    {
                        window.addEventListener('load', () => {
                            window.innerWidth >= 1100 ? console.log('calc') : console.log('norm')
                        })
                    }
                    {
                        window.addEventListener('resize', () => {
                            window.innerWidth >= 1100 ? console.log('calc') : console.log('norm')
                        })
                    }
                    <CSSTransition
                    classNames={ "Nav-menu-" }
                    in={ this.state.toggle }
                    timeout={ 500 }
                    mountOnEnter={ true }
                    unmountOnExit={ true }
                    >
                        <NavMenu>
                            <ul>
                                { this.menuItems }
                            </ul>
                        </NavMenu>
                    </CSSTransition>

                    { /* Navbar__next-page component */}

                    <SwitchTransition>
                        <CSSTransition
                        classNames={ "Next-page-" }
                        key={ this.state.nextPage.path }
                        timeout={ 500 }
                        mountOnEnter={ true }
                        >
                            <NextPage>
                                <NavLink 
                                to={ this.state.nextPage.path }
                                onClick={ this.setPages }
                                >
                                    <span>{ this.state.nextPage.message }</span>
                                    <img src={ rightArrow } alt="arrow" />
                                </NavLink>
                            </NextPage>
                        </CSSTransition>
                    </SwitchTransition>

                    { /* Navbar__menu-icon component */}

                    <CSSTransition
                    classNames={ "Menu-icon-" }
                    in={!this.state.toggle}
                    timeout={ 500 }
                    >
                        <MenuIcon onClick={ this.toggleMenu }>
                            <span className={ "Menu-icon__open" }></span>
                        </MenuIcon>
                    </CSSTransition>
                </Content>
                
                { /* Navbar__background component */}

                <CSSTransition
                classNames={ "Navbar-background-" }
                in={ this.state.toggle }
                timeout={ 500 }
                mountOnEnter={ true }
                unmountOnExit={ true }
                appear={ true }
                >
                    <NavbarBackground />
                </CSSTransition>
            </NavbarContainer>
        );
    }
}