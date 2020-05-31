import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Project from '../Project';

// Unique styles
const Content = styled.div`
    padding-bottom: 300px;
`;

// --------------
// Default Export
// --------------

export default class Work extends Component {
    render() {
        return (
            <main className="Work">
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