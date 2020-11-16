import styled, { keyframes } from 'styled-components';

export const Background = styled.div`
    background-color: #fff0c0;
    position: relative;
    overflow: hidden;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    margin: 0 auto;
    padding-top: ${({ sticky }) => sticky && '80px'};

    @media (max-width: 992px) {
        max-width: 768px;
        min-width: 390px;
    }

    @media (max-width: 1092px) {
        max-width: 898px;
    }
`;

export const Nav = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    width: 100%;
    z-index: 10;
    padding: 0 15px;
    left: 0;
    position: ${({ sticky }) => (sticky ? 'fixed' : 'relative')};
    top: ${({ sticky }) => sticky && 0};
    box-shadow: ${({ sticky }) =>
        sticky && '0px 0px 18px 1px rgba(0, 0, 0, 0.2)'};
    background-color: ${({ sticky }) => sticky && '#fff'};
    transition: ${({ sticky }) => sticky && 'all 0.5s ease'};
`;

export const NavSticky = styled.div`
    display: flex;
    flex: 1;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    height: 80px;
    width: 80px;
    cursor: pointer;
`;

export const Menu = styled.div`
    @media screen and (max-width: 1092px) {
        position: ${({ toggle }) => (toggle ? 'absolute' : 'relative')};
        top: ${({ toggle }) => toggle && 0};
        left: ${({ toggle }) => toggle && 0};
        right: ${({ toggle }) => toggle && 0};
        padding-top: ${({ toggle }) => toggle && 56};
        background-color: ${({ toggle }) => toggle && 'white'};
        padding: ${({ toggle }) => toggle && '10px'};
        margin-top: ${({ toggle }) => toggle && '64px'};
        align-items: ${({ toggle }) => toggle && 'center'};
        height: ${({ toggle }) => toggle && '272px'};
        display: block;
        transition: ${({ toggle }) => toggle && 'all 0.3s ease-out'};
    }
`;

export const MenuButton = styled.a`
    font-size: 15px;
    font-weight: 700;
    color: ${({ sticky }) => (sticky ? '#444' : '#fff')};
    text-decoration: none;
    padding: 15px;
    cursor: pointer;
    z-index: 11;

    @media screen and (max-width: 1092px) {
        display: ${({ toggle }) => (toggle ? 'block' : 'none')};
        color: ${({ toggle }) => (toggle ? '#444' : '#fff')};
        padding: 5px;
        text-align: center;
    }
`;

export const MobileMenu = styled.a`
    color: ${({ sticky }) => (sticky ? '#444' : '#fff')};
    display: none;
    padding: 15px;
    cursor: pointer;
    z-index: 11;

    @media screen and (max-width: 1092px) {
        display: block;
    }

    i {
        font-size: 25px;
    }
`;

export const ArtOverflow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Art = styled.div`
    position: absolute;
    z-index: 0;
    background: orange none repeat scroll 0 0;
    right: 0px;
    bottom: 0px;
    height: 180%;
    width: 100%;
    border-radius: 145px;
    transform: translate(35%, -30%) rotate(-35deg);

    @media (max-width: 992px) {
        right: -40px;
        bottom: 50px;
        height: 155%;
    }
`;

export const WelcomeContainer = styled.div`
    display: flex;
    flex: 1;
    height: 590px;
    justify-content: space-between;
    z-index: 1;

    @media (max-width: 992px) and (min-width: 769px) {
        height: 400px;
    }

    @media (max-width: 768px) {
        align-items: center;
        flex-direction: column;
        min-height: 770px;
        justify-content: center;
    }
`;

export const WelcomeText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    max-width: 540px;
    float: left;
    padding: 30px 15px;
    justify-content: flex-start;
    z-index: 1;

    @media (max-width: 768px) {
        margin: 0px;
    }
`;

export const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    line-height: 90px;
    font-weight: 700;
    font-family: inherit;

    @media (max-width: 992px) {
        font-size: 50px;
        line-height: 50px;
    }
`;

export const SubTitle = styled.p`
    font-size: 18px;
    color: #777;
    line-height: 26px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    padding-left: 5px;

    @media (max-width: 992px) {
        font-size: 16px;
        line-height: 16px;
    }
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
    transition: 0.1s;

    &:hover {
        animation: ${bruh} 3s linear infinite;
    }
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
    margin-right: 75px;
    max-height: 575px;
    height: auto;
    animation: ${jump} 2s ease-in-out infinite;

    @media (max-width: 992px) {
        margin-right: 0;
        width: 250px;
        max-height: 390px;
    }

    @media (max-width: 1200px) and (min-width: 993px) {
        margin-right: 75px;
        width: 330px;
        max-height: 515px;
    }
`;
