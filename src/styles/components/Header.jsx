import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../global';

import { containerWidth } from '../../styles/components/Main';
import ActivePage from './ActivePage';

import logo from '../../../src/img/logo.svg';

/*
 * Unique component styles
 */

const Header = styled.div`
    position: absolute;
    display: flex;

    bottom: 50px;
    width: ${containerWidth}px;
    color: ${colors.white};

    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;

        margin: auto;

        li {
            margin: 0 15px;

            &:hover {
                cursor: pointer;
            }
        }
    }
`;

export const Logo = styled.img`
    position: absolute;
    top: 20px;
    
    width: 30px;
`;

export const LogoContaier = styled.div`
    position: relative;
    display: flex;
    justify-content: left;

    z-index: 11;
`;

const PageTitle = styled.p`
    position: absolute;
    top: 20px;

    margin-left: 50px;
`;

class Nav extends Component {
    constructor() {
        super();
        this.state= { pageTitle: null };
    }

    setPageName = event => {
        const loadTitle = () => {
            if (window.location.pathname === "/projects") {
                return 'Projects';
              } else if (window.location.pathname === "/about") {
                return 'About';
              } else if (window.location.pathname === "/contact") {
                return 'Contact';
              } if (window.location.pathname === "/") {
                return 'Home';
              } else {
                return '¯\\_(ツ)_/¯';
              }
        }

        setInterval(() => {
            this.setState( { pageTitle: loadTitle() } );
        },1);
    }

    componentDidMount() {
        this.setPageName();
    }

    render() {
        return(
            <React.Fragment>
                <LogoContaier>
                    <Link to="/"><Logo src={logo}/></Link>
                </LogoContaier>
                <PageTitle>{ this.state.pageTitle}</PageTitle>
                <Header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </Header>
                <ActivePage page={ this.state.pageTitle}/>
            </React.Fragment>
        );
    }
}

export default Nav;