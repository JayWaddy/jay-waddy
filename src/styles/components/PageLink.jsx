import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import arrow from '../../img/arrow_right.svg';

const Container = styled.div`
    display: flex;
    margin: 30px 0 0 auto;

    img {
        margin-left: 10px;
    }
`;

export default function PageLink({ page, message, title }) {
    return (
        <Container>
            <Link to={ page }>{ title ? <h2>{ message }</h2> : <span>{ message }</span> }</Link>
            <img src={ arrow } alt="arrow"/>
        </Container>
    );
}
