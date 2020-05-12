import React from 'react';

import { 
    SiteContainer as Container, 
    PageContainer as Page, 
    PageContentCenter as Content, 
    Button 
} from '../components/Main';

export default function Home() {
    return (
        <Container>
            <Page>
                <Content>
                    <img src={ require('../../img/logo.svg') } alt="logo" width="150px"/>
                    <h1>A short description of what I do. Maybe a little more here.</h1>
                    <Button primary="true">Explore projects</Button>
                    <Button secondary="true">Let's team up</Button>
                </Content>
            </Page>
        </Container>
    )
}