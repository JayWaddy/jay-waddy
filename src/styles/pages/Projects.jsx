import React from 'react';

import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content
} from '../components/Main';

export default function Projects() {
    return (
        <Container>
            <Page>
                <Content>
                    <h1>A descriptive title for my work.</h1>
                    <p>Then some further explaination can go here. And here if the text needs to wrap.</p>
                </Content>
            </Page>
        </Container>
    )
}
