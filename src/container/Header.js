import React from 'react';
import { Header } from '../components';

const HeaderContainer = () => {
    return (
        <Header id="home">
            <Header.Container>
                <Header.Nav>
                    <Header.Logo
                        src={'assets/images/mr_panda_logo.png'}
                        alt="Flooop"
                    />
                    <Header.Menu>
                        <Header.MenuButton className="current" href="#home">
                            Home
                        </Header.MenuButton>
                        <Header.MenuButton href="#features">
                            Valores
                        </Header.MenuButton>
                        <Header.MenuButton href="#about">
                            Sobre
                        </Header.MenuButton>
                        <Header.MenuButton href="#video">
                            Produtos
                        </Header.MenuButton>
                        {/* <Header.MenuButton>Faq</Header.MenuButton>
                        <Header.MenuButton>Testimonial</Header.MenuButton>
                        <Header.MenuButton>Contact</Header.MenuButton> */}
                    </Header.Menu>
                    <Header.MobileMenu>
                        <i className="fa fa-bars"></i>
                    </Header.MobileMenu>
                </Header.Nav>
                <Header.Art />
                <Header.WelcomeContainer>
                    <Header.WelcomeText>
                        <Header.Title>
                            Mr. Panda
                        </Header.Title>
                        <Header.SubTitle>
                            A Mr. Panda foi fundada em 2021 por Maicon Crefta e Marlon Crefta, dois irmãos que buscam inovar e superar as expectativas dos fumadores.
                        </Header.SubTitle>
                        <Header.BuyButton>Carregando...</Header.BuyButton>
                    </Header.WelcomeText>

                    <Header.WelcomeImage
                        src={'assets/images/logo.png'}
                        alt="Hero"
                    />
                </Header.WelcomeContainer>
            </Header.Container>
        </Header>
    );
};

export default HeaderContainer;
