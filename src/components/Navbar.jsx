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

    /* ------------*/
    /* Logo--enter */
    /* ------------*/

    .Logo--enter {
        opacity: 0;
    }

    .Logo--enter-active {
        opacity: 1;
        transition: opacity ${ duration }ms ease-out;
    }

    .Logo--enter-active-done {
        /* Because this element enters to its default styles, */ 
        /* there is no need for an -enter-done class.         */
    }

    /* ------------*/
    /* Logo--enter */
    /* ------------*/

    .Logo--exit {
        opacity: 1;
    }

    .Logo--exit-active {
        opacity: 0;
        transition: opacity ${ duration }ms ease-out;
    }

    .Logo--exit-active-done {
        /* Because this element enters to its default styles, */ 
        /* there is no need for an -enter-done class.         */
    }

    /* ------------------*/
    /* Menu-icon--appear */
    /* ------------------*/

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
            transition: ${duration}ms ease-out;
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
            transition: ${duration}ms ease-out;
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
            transition: ${duration}ms ease-out;
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
            transition: ${duration}ms ease-out;
            transition-delay: 100ms;
        }
    }

    .Menu-icon--enter-done {
        /* Because this element enters to its default styles, 
           there is no need for an -enter-done class.       */
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
            transition: ${duration}ms ease-out;
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
            transition: ${duration}ms ease-out;
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
`;

const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 350px;
    height: 20px;

    .Logo {
        position: absolute;
        left: 0;
        top: 0;
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

let Ul = styled.ul`
    position: absolute;
    display: none;

    ${props => props.toggle && css`
        display: flex;
        flex-direction: row;
        align-items: center;
    `}

    li {
        margin: 0 15px;
    }
`;

const Menu = styled.div`
    position: absolute;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

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
                        <CSSTransition
                        in={!this.state.toggle}
                        timeout={ 300 }
                        classNames="Logo-"
                        unmountOnExit={ true }
                        >
                            <div className="Logo">
                                <img src={ logo } alt="logo"/>
                            </div>
                        </CSSTransition>
                    </NavLink>
                    <Ul toggle={this.state.toggle} >
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/work">Work</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </Ul>
                    <NextPage toggle={this.state.toggle}>
                        { this.state.activePage === 'contact' || this.state.activePage === '404' ? <img src={ leftArrow } alt="arrow" /> : null  }
                        <NavLink to={this.state.nextPage}>
                            <span>{ this.generateNextPageText() }</span>
                        </NavLink>
                        { this.state.activePage === 'home' || this.state.activePage === 'work' || this.state.activePage === 'about' ? <img src={ rightArrow } alt="arrow" /> : null  }
                    </NextPage>

                    {/* Menu Icon */}
                    <CSSTransition
                    in={!this.state.toggle}
                    timeout={ 500 }
                    classNames="Menu-icon-"
                    // appear={true}
                    >
                        <Menu onClick={ this.switchMenu }>
                            <span className="Menu-icon__open"></span>
                            {/* <span></span>
                            <span></span>
                            <span></span> */}
                        </Menu>
                    </CSSTransition>
                </Content>
            </NavbarContainer>
        );
    }
}