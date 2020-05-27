import React from 'react';

// Style
import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content
} from '../components/Main';

// Components
import Navbar from '../components/Navbar';

export default function _404() {
    return (
        <>
        <Navbar />
        <Container>
            <Page>
                <Content>
                    <img src={ require('../../img/logo_large.svg') } alt="logo" width="150px"/>
                    <h1>404. Page not found.</h1>
                    <p>Yeah. Not sure how you ended up here, but try heading back to the home page and try again.</p>
                </Content>
            </Page>
        </Container>
        </>
    );
}
