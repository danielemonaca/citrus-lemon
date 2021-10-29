import React from "react";
import Section, {BackgroundType} from "./Section";
import styled from "styled-components";
import LemonGrabbing from '../../assets/LemonGrabbing.gif';
import LemonWithoutBackground from '../../assets/lemonWithoutBackground.png';
import LemonWithBackground from '../../assets/lemonWithBackground.png';
import DraftLemons from '../../assets/DraftLemons.png';
import YouTube from "react-youtube";
import youtubeParser from "../../utils/youtubeParser";


const ThirdSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  gap: 60px;
`

const VideosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`

const ImageWrapper = styled.div`
  width: 50%;
`


const VR_VIDEO = 'https://www.youtube.com/watch?v=Zz7sx8rGYFw&ab_channel=CITRUSxLEMON'
const SHORT_VIDEO = 'https://www.youtube.com/watch?v=2BkFXj093lo&t=54s&ab_channel=CITRUSxLEMON'

const ThirdSection: React.FC = () => {

    const opts = {
        height: '440px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0
        },
    };

    const _onReady = (e) => {
        // access to player in all event handlers via e.target
        e.target.pauseVideo();
    }

    return (
        <Section backgroundType={BackgroundType.dark}>
            <ThirdSectionWrapper>
                <ImageWrapper>
                    <img src={LemonGrabbing} alt={''}/>
                </ImageWrapper>
                <VideosWrapper>
                    <YouTube videoId={youtubeParser(VR_VIDEO)} opts={opts} onReady={_onReady}/>
                    <YouTube videoId={youtubeParser(SHORT_VIDEO)} opts={opts} onReady={_onReady}/>
                </VideosWrapper>
            </ThirdSectionWrapper>

        </Section>
    )

}


export default ThirdSection;
