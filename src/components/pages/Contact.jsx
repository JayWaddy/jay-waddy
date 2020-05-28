import React, { Component } from 'react';

// Styles
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

export default class Contact extends Component {
    render() {
        return (
            <main className="Contact">
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
            </main>
        );
    }
}