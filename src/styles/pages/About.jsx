import React from 'react';
import style from 'styled-components';

import { colors } from '../global';

import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content
} from '../components/Main';

/*
 * Unique component styles
 */
const Assets = style.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    margin: 60px 0;
`;

const Circle = style.div`
    display: felx;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 70px;
    margin: 0 5px;

    border-radius: 50px;
    background: ${ colors.magenta };
`;

export default function About() {
    return (
        <Container>
            <Page>
                <Content>
                    <h1>A descriptive title for my myself.</h1>
                    <p>Then some further explaination can go here. And here if the text needs to wrap.</p>

                    <Assets>
                        <Circle>Text</Circle>
                        <Circle>Text</Circle>
                        <Circle>Text</Circle>
                        <Circle>Text</Circle>
                        <Circle>Text</Circle>
                    </Assets>

                    <h1>Here's some further detail.</h1>
                    <p>And of course more explaination can go here. And here if the text needs to wrap.</p>
                </Content>
            </Page>
        </Container>
    )
}
