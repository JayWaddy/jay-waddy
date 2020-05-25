import { keyframes } from 'styled-components';

export const animationSpeed = 1000;
export const animationDelay = 500;

export const enter = keyframes`
    0% { 
        opacity: 0;
        transform: translate(0, 20px); 
    }
    100% { 
        opacity: 1;
        transform: translate(0); 
    }
`;

export const exit = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0); 
    }
    70% {
        opacity: 1;
        transform: translateY(0); 
    }
    80% { 
        opacity: 1;
        transform: translateY(5px); 
    }
    100% { 
        opacity: 0;
        transform: translateY(-20px); 
    }
`;