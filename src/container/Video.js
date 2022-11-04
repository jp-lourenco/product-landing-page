import React from 'react';
import { Video } from '../components';

const VideoContainer = () => {
    return (
        <Video id="video">
            <Video.Container>
                <Video.TextContainer>
                    <Video.Button href="video">
                        <img src="/assets/icons/jogar.svg" alt="Play" />
                    </Video.Button>
                    <Video.Title>
                        Os melhores produtos para você.
                    </Video.Title>
                    <Video.Span />
                    <Video.Text>
                        Contamos especialmente com os nossos clientes para 
                        o desenvolvimento, sempre abertos para receber novas 
                        críticas e recomendações, sendo essencial para melhoria 
                        do serviço.
                    </Video.Text>
                </Video.TextContainer>
            </Video.Container>
        </Video>
    );
};

export default VideoContainer;
