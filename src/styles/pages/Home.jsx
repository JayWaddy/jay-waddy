import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// Style
import { 
    SiteContainer as Container, 
    PageContainer as Page, 
    PageContentCenter
} from '../components/Main';
import Button from '../components/Button';
import { animationSpeed, animationDelay, enter, exit } from '../animations';
/*
 * Unique component styles
 */
const HeroText = styled.div`
    margin: 40px 0;

    h1 {
        margin: 0;
    }
`;

class Home extends Component {
    constructor() {
        super();
        this.state = {
            enter: true,
            active: false,
            exit: false
        }
    }

    playAnimation = () => {
        let enter = document.querySelector('.Home-anim-enter');
        if (this.state.enter) {
            this.setState({
                enter: false,
                active: true
            });

            setTimeout(() => {
                enter.style.opacity = 1; 
            }, animationDelay);

        } else if (!this.state.enter || !this.state.active) {
            this.setState({ exit: true })
        }

        if (this.state.exit) {
            document.querySelector('.Home-container').animation = `${ exit } ${ animationSpeed } ease`;
            document.querySelector('.Home-container').style.opacity = 0; 
        }
    }

    componentDidMount() {
        this.playAnimation();
    }

    render() {
        return (
            <Container>
                <Page>
                    <Content className="Home-container">
                        <img className="Home-anim-enter" src={ require('../../img/logo.svg') } alt="logo" width="150px"/>
                        <HeroText className="Home-anim-enter" delay>
                            <h1>A short description of what I do.</h1>
                            <h1>Maybe a little more here.</h1>
                        </HeroText>
                        <Button set="primary" text="Explore projects" link="/projects"/>
                        <Button set="secondary" text="Let's team up" link="/contact"/>
                    </Content>
                </Page>
            </Container>
        );
    }
}

const Content = styled(PageContentCenter)`
    .Home-anim-enter {
        animation: ${ enter } ${ animationSpeed }ms ease;
        animation-delay: ${ animationDelay }ms;
        opacity: 0;

        ${props => props.delay === 'one' && css`
            animation-delay: 1000ms;
            boder: solid red 1px;
        `}
    }
`;

export default Home;