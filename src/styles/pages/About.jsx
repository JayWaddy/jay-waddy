import React from 'react';
import styled from 'styled-components';

// Style
import { colors } from '../global';
import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content
} from '../components/Main';

/*
 * Unique component styles
 */
const Assets = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    margin: 60px 0;
`;

const Circle = styled.div`
    display: felx;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 70px;
    margin: 0 5px;

    border-radius: 50px;
    background: ${ colors.yellow };

    color: ${ colors.black } !important;

    span {
        font-size: 10px;
    }
`;

export default function About() {
    return (
        <Container>
            <Page>
                <Content>
                    <h1>A descriptive title for my myself.</h1>
                    <p>Then some further explaination can go here. And here if the text needs to wrap.</p>

                    <Assets>
                        <Circle><span>UX/UI</span></Circle>
                        <Circle><span>Mobile 1st Design</span></Circle>
                        <Circle><span>JS ES6+</span></Circle>
                        <Circle><span>100% Custom</span></Circle>
                        <Circle><span>Easy <br /> Hand-off</span></Circle>
                    </Assets>

                    <h1>Here's some further detail.</h1>
                    <p>And of course more explaination can go here. And here if the text needs to wrap.</p>
                </Content>
            </Page>
        </Container>
    )
}
