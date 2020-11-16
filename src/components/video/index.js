import React, { useState, useCallback, useEffect } from 'react';
import {
    Container,
    Background,
    TextContainer,
    Button,
    Text,
    Title,
    Span,
} from './styles/video';

export default function Video({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Video.Container = function VideoContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Video.TextContainer = function VideoTextContainer({ children, ...restProps }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [flag, setFlag] = useState(true);

    const scroll = useCallback(() => {
        if (window.pageYOffset > 1449) {
            setScrollPosition(window.pageYOffset);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scroll);
    }, [scroll]);

    if (scrollPosition > 1450 && flag) {
        setFlag(false);
        window.removeEventListener('scroll', scroll);
    }

    return (
        <TextContainer scrollPosition={scrollPosition} {...restProps}>
            {children}
        </TextContainer>
    );
};

Video.Button = function VideoButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};

Video.Title = function VideoTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Video.Span = function VideoSpan({ ...restProps }) {
    return <Span {...restProps} />;
};

Video.Text = function VideoText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
