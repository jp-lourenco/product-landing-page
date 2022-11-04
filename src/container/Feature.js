import React from 'react';
import { Feature } from '../components';

const FeatureContainer = () => {
    return (
        <Feature id="features">
            <Feature.Title>Valores</Feature.Title>
            <Feature.SubTitle>Valores da empresa</Feature.SubTitle>
            <Feature.Span />
            <Feature.ContainerItem>
                <Feature.Item>
                    <Feature.IconContainer>
                        <img src="/assets/icons/voz.svg" alt="Microfone" />
                    </Feature.IconContainer>
                    <Feature.FeatureText>
                        <Feature.FeatureTitle>
                            Proatividade
                        </Feature.FeatureTitle>
                        <Feature.FeatureSubTitle>
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet
                        </Feature.FeatureSubTitle>
                    </Feature.FeatureText>
                </Feature.Item>
                <Feature.Item>
                    <Feature.IconContainer>
                        <img
                            src="/assets/icons/nota-musical.svg"
                            alt="Musica"
                        />
                    </Feature.IconContainer>
                    <Feature.FeatureText>
                        <Feature.FeatureTitle>
                            Qualidade
                        </Feature.FeatureTitle>
                        <Feature.FeatureSubTitle>
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet
                        </Feature.FeatureSubTitle>
                    </Feature.FeatureText>
                </Feature.Item>
                <Feature.Item>
                    <Feature.IconContainer>
                        <img src="/assets/icons/som-musical.svg" alt="Som" />
                    </Feature.IconContainer>
                    <Feature.FeatureText>
                        <Feature.FeatureTitle>
                            Ética
                        </Feature.FeatureTitle>
                        <Feature.FeatureSubTitle>
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet
                        </Feature.FeatureSubTitle>
                    </Feature.FeatureText>
                </Feature.Item>
                <Feature.Item>
                    <Feature.IconContainer>
                        <img src="/assets/icons/sinal-wifi.svg" alt="Wifi" />
                    </Feature.IconContainer>
                    <Feature.FeatureText>
                        <Feature.FeatureTitle>
                            Respeito
                        </Feature.FeatureTitle>
                        <Feature.FeatureSubTitle>
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet
                        </Feature.FeatureSubTitle>
                    </Feature.FeatureText>
                </Feature.Item>
            </Feature.ContainerItem>
        </Feature>
    );
};

export default FeatureContainer;
