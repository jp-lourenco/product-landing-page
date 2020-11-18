import React from 'react';
import { Footer } from '../components';

const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Content>
                <Footer.TextLogo>Flooop</Footer.TextLogo>
                <Footer.Copyright>Copyright Flooop © 2020.</Footer.Copyright>
                <Footer.ItemContainer>
                    <Footer.Item>
                        <i class="fa fa-facebook" />
                    </Footer.Item>
                    <Footer.Item>
                        <i class="fa fa-twitter" />
                    </Footer.Item>
                    <Footer.Item>
                        <i class="fa fa-linkedin" />
                    </Footer.Item>
                    <Footer.Item>
                        <i class="fa fa-youtube" />
                    </Footer.Item>
                </Footer.ItemContainer>
            </Footer.Content>
        </Footer>
    );
};

export default FooterContainer;
