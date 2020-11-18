import React, { useState, useCallback, useEffect } from 'react';
import {
    Container,
    TextContainer,
    TitleSection,
    Title,
    Text,
    Span,
    Image,
    ImageContainer,
    Icon,
    Li,
    Ul,
} from './styles/about';

export default function About({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

About.TextContainer = function AboutTextContainer({ children, ...restProps }) {
    return <TextContainer {...restProps}>{children}</TextContainer>;
};

About.TitleSection = function AboutTitleSection({ children, ...restProps }) {
    return <TitleSection {...restProps}>{children}</TitleSection>;
};

About.Title = function AboutTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

About.Text = function AboutText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

About.Span = function AboutSpan({ ...restProps }) {
    return <Span {...restProps} />;
};

About.Image = function AboutImage({ ...restProps }) {
    return <Image {...restProps} />;
};

About.ImageContainer = function AboutImageContainer({
    children,
    ...restProps
}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [flag, setFlag] = useState(true);

    const scroll = useCallback(() => {
        if (window.pageYOffset > 824) {
            setScrollPosition(window.pageYOffset);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scroll);
    }, [scroll]);

    if (scrollPosition > 825 && flag) {
        setFlag(false);
        window.removeEventListener('scroll', scroll);
    }

    return (
        <ImageContainer scrollPosition={scrollPosition} {...restProps}>
            {children}
        </ImageContainer>
    );
};

About.Li = function AboutLi({ children, ...restProps }) {
    return (
        <>
            <Li {...restProps}>
                <Icon src={'/assets/icons/verifica.svg'} alt="verifica" />
                {children}
            </Li>
        </>
    );
};

About.Ul = function AboutUl({ children, ...restProps }) {
    return <Ul {...restProps}>{children}</Ul>;
};
