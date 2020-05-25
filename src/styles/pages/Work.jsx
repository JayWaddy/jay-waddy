import React from 'react';
import styled from 'styled-components';

// Components
import { 
    SiteContainer as Container,
    PageContainer as Page,
    PageContent
} from '../components/Main';
import Project from '../components/Project';
import Navbar from '../components/Navbar';

// Unique styles
const Content = styled(PageContent)`
    padding-bottom: 300px;
`;

export default function Work() {
    return (
        <>
        <Navbar />
        <Container>
            <Page>
                <Content>
                    <h1>A descriptive title for my work.</h1>
                    <p>Then some further explaination can go here. And here if the text needs to wrap.</p>
                    <Project 
                    title="Project No. 1"
                    description="Then some further explaination can go here. And here if the text needs to wrap."/>
                    <Project 
                    title="Project No. 2"
                    description="Then some further explaination can go here. And here if the text needs to wrap."/>
                </Content>
            </Page>
        </Container>
        </>
    );
}
