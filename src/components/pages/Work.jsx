import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import { 
    PageContent
} from '../Global';
import Project from '../Project';
import Navbar from '../Navbar';

// Unique styles
const Content = styled(PageContent)`
    padding-bottom: 300px;
`;

// --------------
// Default Export
// --------------

export default class Work extends Component {
    render() {
        return (
            <main className="Work">
                <Navbar />
                <Content>
                    <h1>A descriptive title for my work.</h1>
                    <p>Then some further explaination can go here. And here if the text needs to wrap.</p>
                    <Project 
                    src={ null }
                    title="Project No. 1"
                    description="Then some further explaination can go here. And here if the text needs to wrap."/>
                    <Project 
                    src={ null }
                    title="Project No. 2"
                    description="Then some further explaination can go here. And here if the text needs to wrap."/>
                </Content>
            </main>
        );
    }
}