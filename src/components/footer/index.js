import React from 'react';
import {
    Container,
    Content,
    TextLogo,
    Copyright,
    ItemContainer,
    Item,
} from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
            >
                <path d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
            </svg>
            {children}
        </Container>
    );
}

Footer.Content = function FooterContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>;
};

Footer.TextLogo = function FooterTextLogo({ children, ...restProps }) {
    return <TextLogo {...restProps}>{children}</TextLogo>;
};

Footer.Copyright = function FooterCopyright({ children, ...restProps }) {
    return <Copyright {...restProps}>{children}</Copyright>;
};

Footer.ItemContainer = function FooterItemContainer({
    children,
    ...restProps
}) {
    return <ItemContainer {...restProps}>{children}</ItemContainer>;
};

Footer.Item = function FooterItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};
