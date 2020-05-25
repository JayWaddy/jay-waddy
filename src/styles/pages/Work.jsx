import React from 'react';

import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content
} from '../components/Main';

// Components
import Card from '../components/Card';

export default function Work() {
    return (
        <Container>
            <Page>
                <Content>
                    <h1>A descriptive title for my work.</h1>
                    <p>Then some further explaination can go here. And here if the text needs to wrap.</p>

                    <Card />
                </Content>
            </Page>
        </Container>
    )
}
