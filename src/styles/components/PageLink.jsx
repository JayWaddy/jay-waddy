import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import arrow from '../../img/arrow_right.svg';

const Container = styled.div`
    display: flex;

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    width: 100%;
    margin: 10px 0;


    img {
        margin-left: 10px;
    }

`;

export default function PageLink({ page, message, title }) {
    return (
        <Container>
            <Link to={ page }>
                { title ? <h2>{ message }</h2> : <span>{ message }</span> }
                <img src={ arrow } alt="arrow"/>
            </Link>
        </Container>
    );
}
