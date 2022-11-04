import React from 'react';
import { About } from '../components';

const AboutContainer = () => {
    return (
        <About id="about">
            <About.ImageContainer>
                <About.Image src={'assets/images/hero.png'} alt="Phone" />
            </About.ImageContainer>
            <About.TextContainer>
                <About.TitleSection>Sobre</About.TitleSection>
                <About.Title>
                    A Salus Vacinação antifurto
                </About.Title>
                <About.Span />
                <About.Text>
                    Realiza marcação veicular afim de agregar maior 
                    segurança ao patrimônio do proprietário da empresa, 
                    visando garantir a segurança do colaborador e de sua frota.
                </About.Text>
                <About.Text>
                    Atendendo aos transportadores com padrão de qualidade, 
                    em qualquer região com mais excelência na prestação desse serviço.
                    Oferecendo segurança e tranquilidade para motoristas e proprietários. 
                    Com baixo custo e sem a necessidade de manutenção.
                </About.Text>
                <About.Ul>
                    <About.Li>Reduz o risco de furto</About.Li>
                    <About.Li>
                        Baixo custo
                    </About.Li>
                    <About.Li>Maior controle de peças</About.Li>
                    <About.Li>Marcação na placa do veículo</About.Li>
                </About.Ul>
            </About.TextContainer>
        </About>
    );
};

export default AboutContainer;
