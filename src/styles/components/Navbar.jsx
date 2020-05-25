import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

// Style
import { colors } from '../global';

import logo from '../../../src/img/logo.svg';
import rightArrow from '../../../src/img/arrow_right.svg';
import leftArrow from '../../../src/img/arrow_left.svg';

const Main = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 75px;

    background: ${ colors.navbar };
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    width: 350px;
`;

const Logo = styled.img`
    ${props => props.toggle && css`
        display: none;
    `}
`;

const NextPage = styled.div`
    ${props => props.toggle && css`
        display: none;
    `}
    span {
        margin: 0 10px;
    }
`;

let Ul = styled.ul`
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
    display: flex;
    flex-direction: column;

    span {
        margin: 3px 0;
        width: 20px;
        height: 1.5px;

        background: white;
        content: '';
    }
`;

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
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

    generateNextPageText() {
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

    toggle = () => {
        this.setState(
            { toggle: !this.state.toggle }
        );
    }
    
    componentDidMount() {
        this.setActivePage();
        this.setNextPage();
    }

    render() {
        return (
            <Main>
                <Container>
                    <NavLink to="/">
                        <Logo 
                        src={ logo } 
                        alt="logo" 
                        toggle={this.state.toggle}
                        />
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
                    <Menu onClick={ this.toggle }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Menu>
                </Container>
            </Main>
        );
    }
}
