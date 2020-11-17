import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    max-width: 1140px;
    margin: 50px auto;
    align-items: center;

    @media screen and (max-width: 992px) {
        flex-direction: column;
    }
`;

// Create the keyframes
const jump = keyframes`
    0% { top: 10px; }
    50% { top: -10px;}
    100% { top: 10px; }
`;

export const Image = styled.img`
    position: relative;
    width: 513px;
    max-height: 485px;
    height: auto;
    animation: ${jump} 2s ease-in-out infinite;
    margin-top: 30px;
`;

const opacityOn = keyframes`
    0% {
        margin-left: -300px;
        opacity: 0;
    }
  100% {
      margin-left:0;
      opacity: 1;
    }
`;

export const ImageContainer = styled.div`
    width: 570px;
    padding: 0 15px;
    height: 500px;
    align-items: center;
    animation: ${opacityOn} 2.5s ease 1;
    animation-play-state: ${({ scrollPosition }) =>
        scrollPosition > 824 ? 'running' : 'paused'};
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    margin: 0 auto;
    align-items: flex-start;

    @media screen and (max-width: 992px) {
        margin-left: 40px;
        margin-right: 40px;
    }
`;

export const TitleSection = styled.h2`
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

export const Text = styled.div`
    font-size: 16px;
    color: #434a7e;
    line-height: 26px;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 10px;
    font-weight: 400;
    letter-spacing: 1px;
`;

export const Ul = styled.ul`
    padding: 0;
    margin: 0;
`;

export const Icon = styled.img`
    display: inline-block;
    position: relative;
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-right: 10px;
`;

export const Li = styled.li`
    display: list-item;
    font-weight: 600;
    font-size: 15px;
    color: #444;
    margin-top: 15px;
    list-style-type: none;
`;

export const Title = styled.h3`
    font-weight: 700;
    color: #000;
    text-transform: capitalize;
    font-size: 35px;
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
