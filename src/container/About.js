import React from 'react';
import { About } from '../components';

const AboutContainer = () => {
    return (
        <About id="about">
            <About.ImageContainer>
                <About.Image src={'assets/images/panda.png'} alt="Phone" />
            </About.ImageContainer>
            <About.TextContainer>
                <About.TitleSection>Sobre a empresa</About.TitleSection>
                <About.Title>
                    Uma empresa com valores e princípios éticos
                </About.Title>
                <About.Span />
                <About.Text>
                    No momento, não só como loja mas também como uma marca, 
                    especializada em filtros de vidro artesanal, 
                    como símbolo de qualidade e garantia dos produtos comercializados.
                </About.Text>
                <About.Text>
                    Exclusivamente online, a Mr. Panda Smoke Shop 
                    dispõe-se de alguns produtos para revendedores do ramo.
                </About.Text>
                <About.Ul>
                    <About.Li>Filtros de vidro</About.Li>
                    <About.Li>
                        Mortalhas
                    </About.Li>
                    <About.Li>Sopeiras</About.Li>
                    <About.Li>Slicks</About.Li>
                </About.Ul>
            </About.TextContainer>
        </About>
    );
};

export default AboutContainer;
