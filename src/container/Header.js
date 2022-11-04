import React from 'react';
import { Header } from '../components';

const HeaderContainer = () => {
    return (
        <Header id="home">
            <Header.Container>
                <Header.Nav>
                    <Header.Logo
                        src={'assets/images/hero.png'}
                        alt="Flooop"
                    />
                    <Header.Menu>
                        <Header.MenuButton className="current" href="#home">
                            Página inicial
                        </Header.MenuButton>
                        <Header.MenuButton href="#features">
                            Processo
                        </Header.MenuButton>
                        <Header.MenuButton href="#about">
                            Sobre
                        </Header.MenuButton>
                        <Header.MenuButton href="#video">
                            Video
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
                            Salus Vacinação Antifurto
                        </Header.Title>
                        <Header.SubTitle>
                            Evite roubos e proteja seu patrimonio sem mensalidades, auxiliando na negociação do seguro.
                            Agende uma visita e saiba mais sobre a Vacinação.
                        </Header.SubTitle>
                        <Header.BuyButton>Em breve</Header.BuyButton>
                    </Header.WelcomeText>

                    <Header.WelcomeImage
                        src={'assets/images/hero.png'}
                        alt="Hero"
                    />
                </Header.WelcomeContainer>
            </Header.Container>
        </Header>
    );
};

export default HeaderContainer;
