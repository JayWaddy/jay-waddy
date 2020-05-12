import React from 'react';
import style from 'styled-components';

// Components
import { Container, Button } from '../components/Main'

import { colors } from '../../styles/global'
import background from '../../img/background-mobile.jpg';

/*
 * Unique components
 */

const HomeSection = style.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 95vh;

    background-image: url(${background});
    background-repeat: none;
    background-size: cover;

    animation-name: home-up;
    animation-duration: 0.3s;
    
    @keyframes home-up {
        from { height: 100vh; }
        to { height: 95vh; }
    }
`;

const HomeContent = style.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 350px;
    height: 100px;
`;

const Peak = style.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 5vh;
    background: ${colors.black};
`;

export default function Home() {
    return (
        <Container>
            <HomeSection>
                <HomeContent>
                    <img src={ require('../../img/logo.svg') } alt="logo" width="100px"/>
                    <h1>A short description of what I do. Maybe a little more here.</h1>
                    <Button primary="true">Explore projects</Button>
                    <Button>Let's team up</Button>
                </HomeContent>
            </HomeSection>
            <Peak>What I've worked on</Peak>
        </Container>
    )
}