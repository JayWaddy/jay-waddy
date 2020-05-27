import React from 'react';

// Styles
import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content
} from '../components/Main';

// Components
import Navbar from '../components/Navbar';
import PageLink from '../components/PageLink'

export default function Contact() {
    return (
        <>
        <Navbar />
        <Container>
            <Page>
                <Content>
                    <h1>Have an idea for a project?</h1>
                    <p>And some further elaboration goes in here.</p>
                </Content>
                <PageLink message="Send email" title email/>
            </Page>
        </Container>
        </>
    );
}