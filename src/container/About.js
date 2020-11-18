import React from 'react';
import { About } from '../components';

const AboutContainer = () => {
    return (
        <About id="about">
            <About.ImageContainer>
                <About.Image src={'assets/images/about.png'} alt="Phone" />
            </About.ImageContainer>
            <About.TextContainer>
                <About.TitleSection>About Product</About.TitleSection>
                <About.Title>
                    Awesome digital product can make your life easier
                </About.Title>
                <About.Span />
                <About.Text>
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.
                </About.Text>
                <About.Text>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis.Donec nec justo eget felis facilisis
                    fermentum.
                </About.Text>
                <About.Ul>
                    <About.Li>Wireless Connection Headphones</About.Li>
                    <About.Li>
                        High-quality audio with DSEE HX™ and LDAC.
                    </About.Li>
                    <About.Li>Noise Cancelling without distractions.</About.Li>
                    <About.Li>Wireless freedom with BLUETOOTH</About.Li>
                </About.Ul>
            </About.TextContainer>
        </About>
    );
};

export default AboutContainer;
