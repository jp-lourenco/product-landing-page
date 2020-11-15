import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    margin: 0 auto;
    align-items: center;
`;

export const Title = styled.h2`
    display: inline-block;
    text-transform: uppercase;
    font-size: 15px;
    background-color: rgba(255, 165, 0, 0.5);
    color: orange;
    padding: 5px 16px;
    border-radius: 4px;
    font-weight: 200;
    letter-spacing: 0.6px;
    margin-bottom: 5px;
    margin-top: 50px;
`;

export const SubTitle = styled.p`
    text-transform: capitalize;
    font-size: 40px;
    color: #000;
    font-family: inherit;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 50px;
    margin-top: 10px;
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
    background-color: orange;
    background-size: 200% 200%;
    width: 90px;
    margin-top: 5px;
    margin-bottom: 18px;
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

export const ContainerItem = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1140px;
    margin-top: 50px;

    @media screen and (max-width: 992px) {
        flex-direction: column;
    }
`;

const opacityOn1 = keyframes`
    0% {opacity: 0;}
  100% {opacity: 1;}
`;

const opacityOn2 = keyframes`
    0% {opacity: 0;}
    20% {opacity: 0;}
  100% {opacity: 1;}
`;

const opacityOn3 = keyframes`
    0% {opacity: 0;}
    40% {opacity: 0;}
  100% {opacity: 1;}
`;

const opacityOn4 = keyframes`
    0% {opacity: 0;}
    60% {opacity: 0;}
  100% {opacity: 1;}
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 270px;
    max-height: 350px;
    padding: 0 15px;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
        animation: ${opacityOn1} 2.5s linear 1;
        animation-play-state: ${({ scrollPosition }) =>
            scrollPosition > 374 ? 'running' : 'paused'};
    }
    &:nth-child(2) {
        animation: ${opacityOn2} 2.5s linear 1;
        animation-play-state: ${({ scrollPosition }) =>
            scrollPosition > 374 ? 'running' : 'paused'};
    }
    &:nth-child(3) {
        animation: ${opacityOn3} 2.5s linear 1;
        animation-play-state: ${({ scrollPosition }) =>
            scrollPosition > 374 ? 'running' : 'paused'};
    }
    &:nth-child(4) {
        animation: ${opacityOn4} 2.5s linear 1;
        animation-play-state: ${({ scrollPosition }) =>
            scrollPosition > 374 ? 'running' : 'paused'};
    }
`;

export const IconContainer = styled.div`
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background-color: orange;
    line-height: 100px;
    border-radius: 5px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    margin: 20px auto 50px;
    position: relative;
    text-align: center;

    img {
        display: inline-block;
        color: #fff;
        width: 40px;
        height: 40px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        position: relative;
        z-index: 9;
        margin-left: -4px;
        top: 5px;
    }

    &::after {
        content: '';
        width: 100px;
        height: 100px;
        background-color: rgba(255, 165, 0, 0.5);
        position: absolute;
        left: -10px;
        border-radius: 5px;
        top: -10px;
        z-index: -1;
    }

    &::before {
        content: '';
        width: 90px;
        height: 90px;
        background-color: rgba(255, 165, 0, 0.7);
        position: absolute;
        left: -5px;
        top: -5px;
        border-radius: 5px;
    }
`;

export const FeatureText = styled.div`
    max-width: 255px;
    max-height: 115px;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
`;

export const FeatureTitle = styled.h3`
    font-weight: 600;
    color: #000;
    text-transform: capitalize;
    font-size: 23px;
    margin-bottom: 10px;
`;

export const FeatureSubTitle = styled.p`
    font-size: 16px;
    color: #434a7e;
    line-height: 26px;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    font-weight: 400;
    letter-spacing: 1px;
`;
