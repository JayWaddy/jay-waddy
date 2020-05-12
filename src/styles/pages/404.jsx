import React from 'react';

import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content
} from '../components/Main';

export default function _404() {
    return (
        <Container>
            <Page>
                <Content>
                    <h1>404. Page not found.</h1>
                    <p>404. Page not found.</p>
                </Content>
            </Page>
        </Container>
    )
}
