import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import logo from '../../img/logo_large.svg';
import BackgroundAnimation from '../BackgroundAnimation';

const Tip = styled.div`
    margin-top: 60px;
    opacity: 0.35;

    .Tip--animation {
        animation: bobble 2000ms infinite cubic-bezier(0.45, 0, 0.55, 1);

        @keyframes bobble {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(10px);
            }
            100% {
                transform: translateY(0);
            }
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
                <img src={ logo } alt="logo" width="150px"/>
                <h1>Here's a description of what I do.</h1>
                
                <Tip>
                    <p className="Tip--animation">Tap the link in the navbar.</p>
                </Tip>

                <BackgroundAnimation />
            </main>
        );
    }
}