import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../global';

/*
 * Unique component styles
 */

const CardContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 25%;

    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    z-index: 0;
`;

const CardContent = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 250px;
    height: 350px;
    margin: 0 5px;
    padding: 0 120px;

    background: ${ colors.cyan };
    border-radius: 3px;
    overflow: hidden;

    &::before {
        width: 100%;
        height: 100%;
        content: '';

        padding: 130px;

        border-radius: 3px;
        background: url(${ require('../../img/hayo.png') });
        background-size: cover;
        mix-blend-mode: color-burn;
        /* filter: blur(2px); */
    }

    &:first-child, &:last-child {
        opacity: 0;
    } 

    &:nth-child(3) {
        background: ${ colors.yellow };
    }

    &:first-child {
        padding: 160px;
    } 

    &:last-child {
        padding: 40px;
    } 
`;

const Title = styled.h1`
    position: absolute;
    display: flex;
    align-items: center;

    height: 100%;

    font-size: 40px !important;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
`;

const Footer = styled.footer`
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: 0;

    height: 40px;
    width: 100%;

    background: rgba(0, 0, 0, 0.5);

    a {
        display: flex;

        margin: auto 20px;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`;

export default function Card() {
    return (
        <CardContainer>
                <CardContent />
                <CardContent>
                    <div className="bg"></div>
                    <Title>Hayo</Title>
                    <Footer>
                        <Link to="/more">More info</Link>
                        <Link to="/preview">Live preview</Link>
                    </Footer>
                    <div></div>
                </CardContent>
                <CardContent>
                    <Title>No. 2</Title>
                    <Footer>
                        <Link to="/more">More info</Link>
                        <Link to="/preview">Live preview</Link>
                    </Footer>
                </CardContent>
                <CardContent />
        </CardContainer>
    )
}
