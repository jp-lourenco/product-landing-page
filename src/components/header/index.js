import React, { useState, createContext, useContext } from 'react';
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
    ArtOverflow,
    NavSticky,
} from './styles/header';

export const StickyContext = createContext();

export default function Header({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
    const [sticky, setSticky] = useState(false);

    window.onscroll = function () {
        myFunction();
    };

    function myFunction() {
        if (window.pageYOffset > 170) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    return (
        <StickyContext.Provider value={{ sticky }}>
            <Container sticky={sticky} {...restProps}>
                {children}
            </Container>
        </StickyContext.Provider>
    );
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
    const { sticky } = useContext(StickyContext);

    return sticky ? (
        <Nav sticky={sticky} {...restProps}>
            <NavSticky>{children}</NavSticky>
        </Nav>
    ) : (
        <Nav sticky={sticky} {...restProps}>
            {children}
        </Nav>
    );
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>;
};

Header.MenuButton = function HeaderMenuButton({ children, ...restProps }) {
    const { sticky } = useContext(StickyContext);

    return (
        <MenuButton sticky={sticky} {...restProps}>
            {children}
        </MenuButton>
    );
};

Header.Logo = function HeaderLogo({ ...restProps }) {
    return <Logo {...restProps} />;
};

Header.WelcomeImage = function HeaderWelcomeImage({ ...restProps }) {
    return <WelcomeImage {...restProps} />;
};

Header.Art = function HeaderArt({ ...restProps }) {
    return (
        <ArtOverflow>
            <Art {...restProps} />
        </ArtOverflow>
    );
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
