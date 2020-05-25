import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// Components
import Navbar from '../components/Navbar';
import PageLink from '../components/PageLink';
import background from '../../img/background.png';
import logo from '../../img/logo_large.svg';

// Style
import { 
    SiteContainer as Container, 
    PageContainer as Page, 
    PageContent
} from '../components/Main';
import { animationSpeed, animationDelay, enter, exit } from '../animations';

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
            <>
            <Navbar />
            <Container>
                <Page>
                    <Content className="Home-container">
                        <img className="Home-anim-enter" src={ logo } alt="logo" width="150px"/>
                        <h1>Here's a description of what I do.</h1>
                        <p>A little more can go here if you want.</p>
                        <PageLink page="work" message="Explore work"/>
                    </Content>
                </Page>
                <BackgroundAnim />
            </Container>
            </>
        );
    }
}

const Content = styled(PageContent)`
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

const BackgroundAnim = styled.div`
    position: absolute;
    left: 0;
    bottom: 100px;

    width: 100%;
    height: 161px;

    background-image: url( ${ background });
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

export default Home;