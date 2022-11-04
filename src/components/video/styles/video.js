import styled, { keyframes } from 'styled-components';

export const Background = styled.section`
    position: relative;
    display: block;
    width: 100%;
    background: url('assets/images/back.png') no-repeat fixed 0 0 / cover;

    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('assets/images/back.png') none repeat scroll 0 0;
    }
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    margin: 0 auto;
    align-items: center;
    padding: 120px 80px;
    z-index: 1;

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`;

const opacityOn = keyframes`
    0% {right: -1150px;}
    100% {right: 0px;}
`;

export const TextContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    padding: 50px;
    background: #fff;
    border-radius: 50px;
    animation: ${opacityOn} 2s ease-out 1;
    animation-play-state: ${({ scrollPosition }) =>
        scrollPosition > 1449 ? 'running' : 'paused'};

    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #11A4FF none repeat scroll 0 0;
        transform: rotate(-5deg);
        border-radius: 30px;
        z-index: -1;
    }

    @media screen and (max-width: 768px) {
        padding: 30px;
    }
`;

const spin = keyframes`
    0% {transform:rotate(0deg);}
    100% {transform:rotate(-360deg);}
`;

export const Button = styled.a`
    width: 70px;
    height: 70px;
    display: inline-block;
    text-align: center;
    line-height: 70px;
    position: relative;
    background: #c0fff8;
    color: #fff;
    border-radius: 100px;
    z-index: 1;
    margin-bottom: 35px;
    align-items: center;

    &:before {
        content: '';
        width: 80px;
        height: 80px;
        background-color: #11A4FF;
        position: absolute;
        left: -5px;
        border-radius: 50%;
        top: -5px;
        z-index: -1;
    }

    &:after {
        content: '';
        width: 90px;
        height: 90px;
        background-color: #74c8fc;
        position: absolute;
        left: -10px;
        border-radius: 50%;
        top: -10px;
        z-index: -1;
    }

    &:hover {
        background: #11A4FF;
        cursor: pointer;
        animation: ${spin} 0.3s ease-in-out 1;
    }

    img {
        width: 35px;
        height: 35px;
        vertical-align: middle;
        margin-left: 5px;
    }
`;

export const Title = styled.h2`
    text-transform: capitalize;
    font-size: 30px;
    color: #000;
    font-family: inherit;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 50px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
        line-height: 37px;
    }
`;

export const Text = styled.p`
    font-size: 16px;
    color: #11A4FF;
    line-height: 26px;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    font-weight: 400;
    letter-spacing: 1px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 22px;
    }
`;

// Create the keyframes
const movebg = keyframes`
    0% { left: 0px; }
    100% { left: 90px; }
`;

export const Span = styled.span`
    content: '';
    display: inline-block;
    position: relative;
    margin: 0 auto;
    height: 5px;
    border-radius: 30px;
    background-color: #11A4FF;
    background-size: 200% 200%;
    width: 90px;
    margin-top: 5px;
    margin-bottom: 25px;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: -1.1px;
        height: 7px;
        width: 8px;
        background-color: #fff;
        animation: ${movebg} 3s linear infinite;
    }
`;
