import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import arrow from '../../img/arrow_right.svg';

const Container = styled.div`
    margin: 60px 0 0 auto;
`;

export default function PageLink({ page, message }) {
    return (
        <Container>
            <Link to={ page }>{ message }</Link>
            <img src={ arrow } alt="arrow"/>
        </Container>
    );
}
