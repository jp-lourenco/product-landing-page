import React from 'react';
import { Header } from '../components';

const HeaderContainer = () => {
    return (
        <Header>
            <Header.Container>
                <Header.Nav>
                    <Header.Logo src={'assets/images/flooop.png'} />
                    <Header.Menu>
                        <Header.MenuButton href="#home">Home</Header.MenuButton>
                        <Header.MenuButton href="#features">
                            Features
                        </Header.MenuButton>
                        <Header.MenuButton>About</Header.MenuButton>
                        <Header.MenuButton>Product</Header.MenuButton>
                        <Header.MenuButton>Faq</Header.MenuButton>
                        <Header.MenuButton>Testimonial</Header.MenuButton>
                        <Header.MenuButton>Contact</Header.MenuButton>
                    </Header.Menu>
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

                    <Header.WelcomeImage src={'assets/images/hero.png'} />
                </Header.WelcomeContainer>
            </Header.Container>
        </Header>
    );
};

export default HeaderContainer;
