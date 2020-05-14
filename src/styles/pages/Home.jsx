import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';

import { 
    SiteContainer as Container, 
    PageContainer as Page, 
    PageContentCenter as Content, 
    Button 
} from '../components/Main';

/*
 * Unique component styles
 */
const HeroText = style.div`
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
                    <Link to="/projects"><Button primary="true">Explore projects</Button></Link>
                    <Link to="/contact"><Button secondary="true">Let's team up</Button></Link>
                </Content>
            </Page>
        </Container>
    )
}