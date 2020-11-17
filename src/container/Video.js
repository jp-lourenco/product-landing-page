import React from 'react';
import { Video } from '../components';

const VideoContainer = () => {
    return (
        <Video id="video">
            <Video.Container>
                <Video.TextContainer>
                    <Video.Button>
                        <img src="/assets/icons/jogar.svg" alt="Play" />
                    </Video.Button>
                    <Video.Title>
                        Best Product For You. Check The Demo Video.
                    </Video.Title>
                    <Video.Span />
                    <Video.Text>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna nibh, viverra
                        non, semper suscipit, posuere a, pede.
                    </Video.Text>
                </Video.TextContainer>
            </Video.Container>
        </Video>
    );
};

export default VideoContainer;
