import React from 'react';
import { Header } from '../components';

const HeaderContainer = () => {
    return (
        <Header id="home">
            <Header.Container>
                <Header.Nav>
                    <Header.Logo
                        src={'assets/images/flooop.png'}
                        alt="Flooop"
                    />
                    <Header.Menu>
                        <Header.MenuButton className="current" href="#home">
                            Home
                        </Header.MenuButton>
                        <Header.MenuButton href="#features">
                            Features
                        </Header.MenuButton>
                        <Header.MenuButton href="#about">
                            About
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
                            Best & Smart Digital Product
                        </Header.Title>
                        <Header.SubTitle>
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim pellentesque felis.
                        </Header.SubTitle>
                        <Header.BuyButton>Buy product</Header.BuyButton>
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
