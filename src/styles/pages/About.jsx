import React from 'react';

// Styles
import { 
    SiteContainer as Container, 
    PageContainer as Page,
    PageContent as Content,
    fullWidth as Full
} from '../components/Main';

// Components
import Navbar from '../components/Navbar';
import img from '../../img/text.png'

export default function About() {
    return (
        <>
        <Navbar />
        <Container>
            <Page>
                <Content>
                    <h1>A descriptive title for my myself.</h1>
                    <p>Then some further explaination can go here. And here if the text needs to wrap.</p>
                    <Full>
                        <img src={ img } alt="img" />
                    </Full>
                </Content>
            </Page>
        </Container>
        </>
    );
}