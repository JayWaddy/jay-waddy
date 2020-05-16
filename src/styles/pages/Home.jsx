import React from 'react';
import styled from 'styled-components';

import { 
    SiteContainer as Container, 
    PageContainer as Page, 
    PageContentCenter as Content
} from '../components/Main';
import Button from '../components/Button';

/*
 * Unique component styles
 */
const HeroText = styled.div`
    margin: 40px 0;

    h1 {
        margin: 0;
    }
`;

export default function Home() {
    return (
        <Container>
            <Page>
                <Content>
                    <img src={ require('../../img/logo.svg') } alt="logo" width="150px"/>
                    <HeroText>
                        <h1>A short description of what I do.</h1>
                        <h1>Maybe a little more here.</h1>
                    </HeroText>
                    <Button set="primary" text="Explore projects" link="/projects"/>
                    <Button set="secondary" text="Let's team up" link="/contact"/>
                </Content>
            </Page>
        </Container>
    )
}