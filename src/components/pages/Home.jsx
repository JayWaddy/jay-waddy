import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Navbar from '../Navbar';
import PageLink from '../PageLink';
import background from '../../img/background.png';
import logo from '../../img/logo_large.svg';

// Style
import { FullWidth as Full } from '../Global';

const BackgroundAnim = styled.div`
    height: 160px;

    background-image: url( ${ background } );
    background-size: 100px 160px;
    background-repeat: repeat-x;
    opacity: 0.5;

    animation: scroll 3000ms linear infinite;

    @keyframes scroll {
        from {
            background-position-x: -100px;
        }
        to {
            background-position-x: 0;
        }
    }
`;

// --------------
// Default Export
// --------------

export default class Home extends Component {
    render() {
        return (
            <main className="Home">
                <Navbar />
                <img src={ logo } alt="logo" width="150px"/>
                <h1>Here's a description of what I do.</h1>
                <p>A little more can go here if you want.</p>

                <div className="PageLink-padding">
                    <PageLink page="work" message="Explore work"/>
                </div>
                
                <Full>
                    <BackgroundAnim />
                </Full>
            </main>
        );
    }
}