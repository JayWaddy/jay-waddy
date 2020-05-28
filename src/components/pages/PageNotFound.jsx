import React from 'react';

// Style
import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content
} from '../Global';

// Components
import Navbar from '../Navbar';
import PageLink from '../PageLink';

// --------------
// Default Export
// --------------

export default function PageNotFound() {
    return (
        <main className="PageNotFound">
            <Navbar />
            <Container>
                <Page>
                    <Content>
                        <img src={ require('../../img/logo_large.svg') } alt="logo" width="150px"/>
                        <h1>404. Page not found.</h1>
                        <p>Yeah. Not sure how you ended up here, but try heading back to the home page and try again.</p>
                    </Content>
                    <div className="PageLink-padding">
                        <PageLink page="/" message="Back to home page"/>
                    </div>
                </Page>
            </Container>
        </main>
    );
}