import React from 'react';
import {
    Container,
    Nav,
    Menu,
    MenuButton,
    Title,
    SubTitle,
    Logo,
    Art,
    WelcomeText,
    WelcomeContainer,
    WelcomeImage,
    BuyButton,
    Background,
    ImageContainer,
} from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
    return <Nav {...restProps}>{children}</Nav>;
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>;
};

Header.MenuButton = function HeaderMenuButton({ children, ...restProps }) {
    return <MenuButton {...restProps}>{children}</MenuButton>;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
    return <Logo {...restProps} />;
};

Header.WelcomeImage = function HeaderWelcomeImage({ ...restProps }) {
    return <WelcomeImage {...restProps} />;
};

Header.ImageContainer = function HeaderImageContainer({
    children,
    ...restProps
}) {
    return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Header.Art = function HeaderArt({ ...restProps }) {
    return <Art {...restProps} />;
};

Header.WelcomeText = function HeaderWelcomeText({ children, ...restProps }) {
    return <WelcomeText {...restProps}>{children}</WelcomeText>;
};

Header.WelcomeContainer = function HeaderWelcomeContainer({
    children,
    ...restProps
}) {
    return <WelcomeContainer {...restProps}>{children}</WelcomeContainer>;
};

Header.BuyButton = function HeaderBuyButton({ children, ...restProps }) {
    return <BuyButton {...restProps}>{children}</BuyButton>;
};
