import React, { useState, createContext, useContext, useEffect } from 'react';
import {
    Container,
    Nav,
    Menu,
    MobileMenu,
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

export const MobileMenuContext = createContext();

export default function Header({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const mainSections = document.querySelectorAll('section');
        window.addEventListener('scroll', () => {
            let mainNavLinks = document.querySelectorAll('nav div a');
            if (window.pageYOffset > 170) {
                setSticky(true);
            } else {
                setSticky(false);
            }
            let fromTop = window.scrollY;
            mainNavLinks.forEach((link, i) => {
                if (i < 4) {
                    if (
                        mainSections[i].offsetTop - 40 <= fromTop &&
                        mainSections[i].offsetTop +
                            mainSections[i].clientHeight -
                            40 >
                            fromTop
                    ) {
                        link.classList.add('current');
                    } else {
                        link.classList.remove('current');
                    }
                }
            });
        });
    }, []);

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
    const [toggle, setToggle] = useState(false);

    return sticky ? (
        <MobileMenuContext.Provider value={{ toggle, setToggle }}>
            <Nav sticky={sticky} {...restProps}>
                <NavSticky>{children}</NavSticky>
            </Nav>
        </MobileMenuContext.Provider>
    ) : (
        <MobileMenuContext.Provider value={{ toggle, setToggle }}>
            <Nav sticky={sticky} {...restProps}>
                {children}
            </Nav>
        </MobileMenuContext.Provider>
    );
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
    const { toggle } = useContext(MobileMenuContext);

    return (
        <Menu toggle={toggle} {...restProps}>
            {children}
        </Menu>
    );
};

Header.MobileMenu = function HeaderMobileMenu({ children, ...restProps }) {
    const { toggle, setToggle } = useContext(MobileMenuContext);
    const { sticky } = useContext(StickyContext);

    return (
        <MobileMenu
            sticky={sticky}
            onClick={() => setToggle(!toggle)}
            {...restProps}
        >
            {children}
        </MobileMenu>
    );
};

Header.MenuButton = function HeaderMenuButton({ children, ...restProps }) {
    const { sticky } = useContext(StickyContext);
    const { toggle } = useContext(MobileMenuContext);

    return (
        <MenuButton sticky={sticky} toggle={toggle} {...restProps}>
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
