import styled, { keyframes } from 'styled-components';

// Create the keyframes
const bruh = keyframes`
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 0%; }
    100% { background-position: 0% 0%; }
`;

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    margin: 80px auto 0;
    align-items: center;
    background-size: 500% 100%;
    background-color: #106181;
    background-image: linear-gradient(45deg, #106181 30%, #51719C 50%);
    animation: ${bruh} 4s linear infinite;

    svg {
        background-color: transparent;
        display: block;
        height: 30px;
        position: relative;
        top: -1px;
        width: 100%;
        fill: white;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    position: relative;
    height: 260px;
`;

export const TextLogo = styled.div`
    background-color: white;
    color: black;
    font-size: 50px;
    font-weight: bold;
    margin: 0 auto;
    padding: 20px 8px;
    position: relative;
    mix-blend-mode: screen;
`;

export const Copyright = styled.p`
    margin-top: 10px;
    padding-top: 5px;
    border-top: 1px solid #ddd;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Item = styled.a`
    width: 30px;
    height: 30px;
    background-color: #fff;
    line-height: 30px;
    border-radius: 5px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    margin: 25px;
    position: relative;
    display: block;
    color: #4777f4;
    text-align: center;
    z-index: 1;
    cursor: pointer;

    &:after {
        content: '';
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.45);
        position: absolute;
        left: -5px;
        top: -5px;
        border-radius: 5px;
        z-index: -1;
    }

    &:before {
        content: '';
        width: 50px;
        height: 50px;
        background-color: rgba(16, 97, 129, 0.2);
        position: absolute;
        left: -10px;
        border-radius: 5px;
        top: -10px;
        z-index: -1;
    }

    i {
        font-size: 16px;
        color: #51719C;
        transform: rotate(45deg);
    }
`;
