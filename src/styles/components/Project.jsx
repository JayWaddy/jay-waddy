import React from 'react';
import styled from 'styled-components';

// Components
import PageLink from '../components/PageLink';

// Unique styles
const Container = styled.div`
    margin-top: 60px;
`;

const Img = styled.div`
    width: 100%;
    height: 250px;

    background: gray;
`;

export default function Project({ src, title, description }) {
    return (
        <Container>
            <Img src={ src }/>
            <PageLink 
            page="work/project-01" 
            message={ title } 
            title
            />
            <p>{ description }</p>
            <PageLink 
            page="work/project-01" 
            message="Live preview"
            short
            />
        </Container>
    );
}
