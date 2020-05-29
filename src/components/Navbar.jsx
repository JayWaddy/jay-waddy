import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

// Style
import { colors } from './Global';

// Images
import logo from '../img/logo.svg';
import rightArrow from '../img/arrow_right.svg';
import leftArrow from '../img/arrow_left.svg';

// Variaables
const duration = 300;
const easeQubic = 'cubic-bezier(0.87, 0, 0.13, 1)';
const easeOut = 'cubic-bezier(0.16, 1, 0.3, 1)';

// Unique Styles
const NavbarContainer = styled.div`
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
            transition: ${duration}ms ${ easeQubic };
            transition-delay: 0;
        }
        .Menu-icon__open {
            background: white;
            transform: translate(0, 0);
            transition: ${duration}ms ${ easeQubic };
            transition-delay: 100ms;
        }
        .Menu-icon__open::after {
            background: white;
            transform: translate(0, 8px);
            transition: ${duration}ms ${ easeQubic };
            transition-delay: 200ms;
        }
    }

    /*
     * --------------------
     * Menu-icon--enter
     * --------------------
     */

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
            transition: ${duration}ms ${ easeQubic };
            transition-delay: 0;
        }
        .Menu-icon__open {
            background: white;
            transform: translate(0, 0);
            transition: ${duration}ms ease-out;
            transition-delay: 100ms;
        }
        .Menu-icon__open::after {
            background: white;
            transform: translate(0, 8px);
            transition: ${duration}ms ${ easeQubic };
            transition-delay: 100ms;
        }
    }

    .Menu-icon--enter-done {
        /* Because this element enters to its default styles, there is no need for an -enter-done class.*/
    }

    /*
     * --------------------
     * Menu-icon--exit
     * --------------------
     */
    
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
            transition: ${duration}ms ${ easeQubic };
            transition-delay: 0;
        }
        .Menu-icon__open {
            background: transparent;
            transform: translate(20, 0);
            transition: ${duration}ms ease-out;
            transition-delay: 100ms;
        }
        .Menu-icon__open::after {
            background: white;
            transform: rotate(-45deg);
            transition: ${duration}ms ${ easeQubic };
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

    /* End of .Menu-icon ------------------------- */

    /* --------------------------*
     * .Navbar-background--appear *
     * --------------------------*/
    .Navbar-background--appear {
        transform: translateX(0);
    }

    .Navbar-background--appear-active {
        transform: translateX(100%);
        transition: transform ${ duration }ms cubic-bezier(0.87, 0, 0.13, 1);
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
        transition: transform ${ duration }ms cubic-bezier(0.87, 0, 0.13, 1);
    }

    .Navbar-background--enter-done {
        /* Because this element enters to its default styles, there is no need for an -enter-done class.*/
    }

    /* --------------------------*
    * .Navbar-background--enter *
    * --------------------------*/
    .Navbar-background--exit {
        transform: translateX(0);
    }

    .Navbar-background--exit-active {
        transform: translateX(100%);
        transition: transform ${ duration }ms cubic-bezier(0.87, 0, 0.13, 1);
        transition-delay: 200ms;
    }

    .Navbar-background--exit-done {
        /* Because this element enters to its default styles, there is no need for an -enter-done class.*/
    }
    /* End of .Navbar-background ---------- */

    /* --------------------------*
     * .Nav-menu--appear *
     * --------------------------*/
    .Nav-menu--appear {
        
    }

    .Nav-menu--appear-active {
        
    }

    .Nav-menu--appear-done {
        
    }

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
                transition: opacity ${ duration }ms ease-out, transform ${ duration }ms ${ easeOut };
                transition-delay: 250ms;
            }
            &:nth-child(2){
                opacity: 1;
                transform: translateY(0);
                transition: opacity ${ duration }ms ease-out, transform ${ duration }ms ${ easeOut };
                transition-delay: 200ms;
            }
            &:nth-child(3){
                opacity: 1;
                transform: translateY(0);
                transition: opacity ${ duration }ms ease-out, transform ${ duration }ms ${ easeOut };
                transition-delay: 150ms;
            }
            &:nth-child(4){
                opacity: 1;
                transform: translateY(0);
                transition: opacity ${ duration }ms ease-out, transform ${ duration }ms ${ easeOut };
                transition-delay: 100ms;
            }
        }
    }

    .Nav-menu--enter-done {
        /* Because this element enters to its default styles, there is no need for an -enter-done class.*/
    }

    /* --------------------------*
    * .Nav-menu--enter *
    * --------------------------*/
    .Nav-menu--exit {
        
    }

    .Nav-menu--exit-active {
        ul li {
            &:nth-child(1){
                opacity: 0;
                transform: translateY(10px);
                transition: opacity 100ms ease-in, transform ${ duration }ms ${ easeOut };
                transition-delay: 100ms;
            }
            &:nth-child(2){
                opacity: 0;
                transform: translateY(10px);
                transition: opacity 100ms ease-in, transform ${ duration }ms ${ easeOut };
                transition-delay: 150ms;
            }
            &:nth-child(3){
                opacity: 0;
                transform: translateY(10px);
                transition: opacity 100ms ease-in, transform ${ duration }ms ${ easeOut };
                transition-delay: 200ms;
            }
            &:nth-child(4){
                opacity: 0;
                transform: translateY(10px);
                transition: opacity 100ms ease-in, transform ${ duration }ms ${ easeOut };
                transition-delay: 250ms;
            }
        }
    }

    .Nav-menu--exit-done {
        /* Because this element enters to its default styles, there is no need for an -enter-done class.*/
    }
    /* End of .Nav-menu ---------- */
`;

const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 350px;
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

    ${props => props.toggle && css`
        display: none;
    `}
    
    span {
        margin: 0 10px;
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
            menuClosed: true,
            menuOpen: false,
            activePage: '',
            nextPage: ''
        }
    }

    setActivePage = () => {
        if (window.location.pathname === '/') {
            this.setState({ activePage: 'home' });
        } else if (window.location.pathname === '/work') {
            this.setState({ activePage: 'work' });
        } else if (window.location.pathname === '/about') {
            this.setState({ activePage: 'about' });
        } else if (window.location.pathname === '/contact') {
            this.setState({ activePage: 'contact' });
        } else {
            this.setState({ activePage: '404' });
        }
    }

    setNextPage = () => {
        if (window.location.pathname === '/' 
        || window.location.pathname === '/contact') {
            this.setState({ nextPage: 'work' });
        } else if (window.location.pathname === '/work') {
            this.setState({ nextPage: 'about' });
        } else if (window.location.pathname === '/about') {
            this.setState({ nextPage: 'contact' });
        } else {
            this.setState({ nextPage: '/' });
        }
    }

    generateNextPageText = () => {
        if (this.state.activePage === 'home' || this.state.activePage === 'contact') {
            return 'Explore work';
        } else if (this.state.activePage === 'work') {
            return 'Get to know me';
        } else if (this.state.activePage === 'about') {
            return 'Let\'s team up';
        } else {
            return 'Go back to home page'
        }
    }

    switchMenu = () => {
        this.setState(
            { 
                toggle: !this.state.toggle
             }
        );
    }
    
    componentDidMount() {
        this.setActivePage();
        this.setNextPage();
    }

    render() {
        return (
            <NavbarContainer className="Navbar">
                <Content >
                    <NavLink to="/">
                        <Logo>
                            <img src={ logo } alt="logo"/>
                        </Logo>
                    </NavLink>

                    <CSSTransition
                    in={ this.state.toggle }
                    timeout={ 500 }
                    classNames="Nav-menu-"
                    mountOnEnter={ true }
                    unmountOnExit={ true }
                    >
                        <NavMenu>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/work">Work</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </NavMenu>
                    </CSSTransition>

                    <CSSTransition
                    in={ !this.state.toggle }
                    timeout={ 500 }
                    classNames="Next-page-"
                    mountOnEnter={ true }
                    unmountOnExit={ true }
                    >
                        <NextPage>
                            { this.state.activePage === 'contact' || this.state.activePage === '404' ? <img src={ leftArrow } alt="arrow" /> : null  }
                            <NavLink to={ this.state.nextPage }>
                                <span>{ this.generateNextPageText() }</span>
                            </NavLink>
                            { this.state.activePage === 'home' || this.state.activePage === 'work' || this.state.activePage === 'about' ? <img src={ rightArrow } alt="arrow" /> : null  }
                        </NextPage>
                    </CSSTransition>

                    <CSSTransition
                    in={!this.state.toggle}
                    timeout={ 500 }
                    classNames="Menu-icon-"
                    appear={true}
                    >
                        <MenuIcon onClick={ this.switchMenu }>
                            <span className="Menu-icon__open"></span>
                        </MenuIcon>
                    </CSSTransition>
                </Content>

                <CSSTransition
                in={ this.state.toggle }
                timeout={ 500 }
                classNames="Navbar-background-"
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