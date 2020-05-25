import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import { colors } from '../global';
import PageLink from '../components/PageLink';

// Unique styles
const Container = styled.div`
    margin-top: 60px;
`;

const Img = styled.div`
    width: 100%;
    height: 200px;

    background: gray;
`;

export default function Project({title, description}) {
    return (
        <Container>
            <Img />
            <PageLink 
            page="work/project-01" 
            message={ title } 
            title
            />
            <p>{ description }</p>
            <PageLink 
            page="work/project-01" 
            message="Live preview"
            link
            />
        </Container>
    );
}
