import styled, { keyframes } from 'styled-components';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fffacd;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    margin: 0 auto;
`;

export const Nav = styled.div`
    display: flex;
    flex: 1;
    align-self: center;
    justify-content: space-between;
    height: 56px;
    padding: 0 15px;
    width: 100%;
    z-index: 1;
`;

export const Menu = styled.div`
    display: flex;
    float: right;
    align-items: center;
    list-style: none;
`;

export const MenuButton = styled.a`
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    padding: 15px;
    cursor: pointer;
`;

export const Logo = styled.img`
    height: 80px;
    width: 80px;
    float: left;
    cursor: pointer;
`;

export const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    margin-top: 100px;
    line-height: 90px;
    font-weight: 700;
    font-family: inherit;

    @media (max-width: 1100px) {
        margin-top: 0;
    }
`;

export const Art = styled.div`
    position: absolute;
    z-index: 0;
    background: orange none repeat scroll 0 0;
    right: 0;
    bottom: 0;
    height: 180%;
    width: 100%;
    border-radius: 145px;
    transform: translate(35%, -30%) rotate(-35deg);

    @media (max-width: 1100px) {
        height: 0%;
        width: 0%;
    }
`;

export const WelcomeText = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 530px;
    float: left;
    padding: 30px 15px;
    justify-content: flex-start;
    z-index: 1;
`;

export const SubTitle = styled.p`
    font-size: 18px;
    color: #777;
    line-height: 26px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    padding-left: 5px;
`;

// Create the keyframes
const bruh = keyframes`
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 0%; }
    100% { background-position: 0% 0%; }
`;

export const BuyButton = styled.button`
    // reset
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    // styles
    display: flex;
    align-items: center;
    width: 160px;
    height: 45px;
    background: linear-gradient(45deg, orange 10%, red 90%);
    padding: 0px 35px;
    margin-left: 5px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 12px;
    color: #fff;
    font-weight: 700;
    border-radius: 2px;
    background-size: 200% 200%;
    transition: 0.3s;

    &:hover {
        animation: ${bruh} 3s linear infinite;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    height: 590px;
    width: 610px;
    justify-content: center;
`;

// Create the keyframes
const jump = keyframes`
    0% { top: 10px; }
    50% { top: -10px;}
    100% { top: 10px; }
`;

export const WelcomeImage = styled.img`
    position: relative;
    width: 370px;
    max-height: 575px;
    height: auto;
    animation: ${jump} 2s ease-in-out infinite;

    @media (max-width: 1100px) {
        margin-right: 0;
    }
`;

export const WelcomeContainer = styled.div`
    display: flex;
    z-index: 1;
    justify-content: space-between;

    @media (max-width: 1100px) {
        align-items: center;
        flex-direction: column;
    }
`;
