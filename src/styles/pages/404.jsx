import React from 'react';
import styled, { css } from 'styled-components';

// Style
import { colors } from '../global';
import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContentCenter as Content
} from '../components/Main';

// Components
import Button from '../components/Button';
import Navbar from '../components/Navbar';

/*
 * Unique component styles
 */
const LogoSpacing = styled.div`
    margin: 20px 0;
`;

const Assets = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-bottom: 20px;
`;

const Circle = styled.div`
    display: felx;
    justify-content: center;
    align-items: center;

    width: 90px;
    height: 90px;
    margin: 0 5px;

    border-radius: 50px;
    background: ${ colors.magenta };

    ${props => props.primary && css`
        background: ${ colors.magenta };
    `}

    ${props => props.secondary && css`
        background: ${ colors.cyan };
    `}

    ${props => props.tertiary && css`
        background: ${ colors.yellow };
        color: ${ colors.black } !important;
    `}

    ${props => props.social && css`
        background: ${ colors.yellow };
        
        width: 40px;
        height: 40px;
    `}
`;

const ButtonSpacing = styled.div`
    margin: 0 0 10px 0;
`;

export default function _404() {
    return (
        <>
        <Navbar />
        <Container>
            <Page>
                <Content>
                    <h1>404. Page not found.</h1>
                    <p>Yeah. Not sure how you ended up here, but try heading back to the home page and try again.</p>

                    <LogoSpacing>
                        <img src={ require('../../img/logo-outline.svg') } alt="logo" width="150px"/>
                    </LogoSpacing>

                    <ButtonSpacing>
                        <Button set="primary" text="Go to home page" link="/"/>
                    </ButtonSpacing>

                    <Assets>
                        <Circle social />
                        <Circle social />
                        <Circle social />
                    </Assets>
                </Content>
            </Page>
        </Container>
        </>
    );
}
