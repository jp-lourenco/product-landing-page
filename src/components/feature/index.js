import React from 'react';
import {
    Container,
    Title,
    SubTitle,
    Span,
    ContainerItem,
    Item,
    FeatureText,
    FeatureTitle,
    FeatureSubTitle,
    IconContainer,
} from './styles/feature';

export default function Feature({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.Span = function FeatureSpan({ ...restProps }) {
    return <Span {...restProps} />;
};

Feature.ContainerItem = function FeatureContainerItem({
    children,
    ...restProps
}) {
    return <ContainerItem {...restProps}>{children}</ContainerItem>;
};

Feature.Item = function FeatureItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};

Feature.FeatureText = function FeatureFeatureText({ children, ...restProps }) {
    return <FeatureText {...restProps}>{children}</FeatureText>;
};

Feature.FeatureTitle = function FeatureFeatureTitle({
    children,
    ...restProps
}) {
    return <FeatureTitle {...restProps}>{children}</FeatureTitle>;
};

Feature.FeatureSubTitle = function FeatureFeatureSubTitle({
    children,
    ...restProps
}) {
    return <FeatureSubTitle {...restProps}>{children}</FeatureSubTitle>;
};

Feature.IconContainer = function FeatureIconContainer({
    children,
    ...restProps
}) {
    return <IconContainer {...restProps}>{children}</IconContainer>;
};
