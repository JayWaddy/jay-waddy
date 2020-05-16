import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../global';
import {
    contentWidth,
    widthDiff
} from '../components/Main';

export const ButtonStyle = styled.button`
    position: relative;
    width: ${ contentWidth - widthDiff }px;

    margin: 5px 0;
    padding: 20px;
    border-radius: 3px;
    border: none;

    span {
        position: relative;
        color: ${ colors.black } !important;
        z-index: 2;
    }

    ${props => props.primary && css`
        &::after {
            position: absolute;
            top: 0;
            left: 0;

            content: '';
            padding: 29px 112px;
            border-radius: 3px;
            background: ${ colors.cyan };
        }

        &::before {
            position: absolute;
            top: 0;
            left: 0;

            content: '';
            padding: 29px 109px;
            border-radius: 3px;
            background: ${ colors.yellow };
            z-index: 1;
        }

        background: ${ colors.magenta };
    `}

    &:hover {
        cursor: pointer;
    }
`;

export default function Button(props) {
    if (props.set === "primary" && props.noLink) {
        return (
                <ButtonStyle primary>
                    <span>{ props.text }</span>
                </ButtonStyle>
        );
    } else if (props.set === "primary") {
        return (
            <Link to={ props.link }>
                <ButtonStyle primary>
                    <span>{ props.text }</span>
                </ButtonStyle>
            </Link>
        );
    } else {
        return (
            <Link to={ props.link }>
                <ButtonStyle>
                    <span>{ props.text }</span>
                </ButtonStyle>
            </Link>
        );
    }
}
