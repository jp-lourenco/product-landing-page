import React from 'react';
import { Footer } from '../components';

const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Content>
                <Footer.TextLogo>Flooop</Footer.TextLogo>
                <Footer.Copyright>Copyright Flooop © 2020.</Footer.Copyright>
                <Footer.ItemContainer>
                    <Footer.Item href="facebook">
                        <i className="fa fa-facebook" />
                    </Footer.Item>
                    <Footer.Item href="twitter">
                        <i className="fa fa-twitter" />
                    </Footer.Item>
                    <Footer.Item href="linkedin">
                        <i className="fa fa-linkedin" />
                    </Footer.Item>
                    <Footer.Item href="youtube">
                        <i className="fa fa-youtube" />
                    </Footer.Item>
                </Footer.ItemContainer>
            </Footer.Content>
        </Footer>
    );
};

export default FooterContainer;
