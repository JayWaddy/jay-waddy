import React from 'react';
import style, { css } from 'styled-components';

import { colors } from '../global';

import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content,
    Button
} from '../components/Main';

/*
 * Unique component styles
 */
const Assets = style.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-bottom: 20px;
`;

const Circle = style.div`
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

const ButtonSpacing = style.div`
    margin: 60px 0 10px 0;
`;

export default function Contact() {
    return (
        <Container>
            <Page>
                <Content>
                    <Assets>
                        <Circle primary>Think</Circle>
                        <Circle secondary>Create</Circle>
                        <Circle tertiary>Enjoy</Circle>
                    </Assets>

                    <h1>A description of your ideas.</h1>
                    <p>And some further elaboration goes in here.</p>

                    <ButtonSpacing>
                        <a href="mailto:waddylmt@gmail.com?subject=Let's%20Team%20Up!"><Button primary="true">Send e-mail</Button></a>
                    </ButtonSpacing>

                    <Assets>
                        <Circle social />
                        <Circle social />
                        <Circle social />
                    </Assets>
                </Content>
            </Page>
        </Container>
    )
}
