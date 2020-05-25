import React from 'react';
import styled, { css } from 'styled-components';

// Styles
import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content
} from '../components/Main';
import { colors } from '../global';

// Components
import Btn from '../components/Button';
import Navbar from '../components/Navbar';

/*
 * Unique component styles
 */
const Assets = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-bottom: 60px;
`;

const Circle = styled.div`
    position: relative;
    display: felx;
    justify-content: center;
    align-items: center;

    width: 90px;
    height: 90px;
    margin: 0 5px;

    border-radius: 50px;
    background: ${ colors.magenta };

    span {
        font-size: 50px;
    }

    small {
        position: absolute;
        left: 50%;
        bottom: -20px;

        transform: translateX(-50%);
    }

    ${props => props.primary && css`
        background: ${ colors.magenta };
    `}

    ${props => props.secondary && css`
        background: ${ colors.cyan };
    `}

    ${props => props.tertiary && css`
        background: ${ colors.yellow };
    `}

    ${props => props.social && css`
        background: ${ colors.white };
        
        width: 40px;
        height: 40px;
    `}
`;

const Button = styled.a`
    margin: 60px 0 10px 0;
`;

export default function Contact() {
    return (
        <>
        <Navbar />
        <Container>
            <Page>
                <Content>
                    <Assets>
                        <Circle primary><span role="img" aria-label="light bulb">&#128161;</span><small>Idea</small></Circle>
                        <Circle secondary><span role="img" aria-label="laptop">&#128187;</span><small>Code</small></Circle>
                        <Circle tertiary><span role="img" aria-label="star-struck">&#129321;</span><small>Joy</small></Circle>
                    </Assets>

                    <h1>Have an idea for a project?</h1>
                    <p>And some further elaboration goes in here.</p>

                    <Button href="mailto:waddylmt@gmail.com?subject=Let's%20Team%20Up!">
                        <Btn set="primary" text="Send an email" noLink />
                    </Button>

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
