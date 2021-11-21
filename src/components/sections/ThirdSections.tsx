import React from "react";
import Section, {BackgroundType} from "./Section";
import styled from "styled-components";
import LemonGrabbing from '../../assets/LemonGrabbing.gif';
import youtubeParser from "../../utils/youtubeParser";
import {Viewports} from "../../styles";
import useWindowSize from "../../utils/hooks/useWindowSize";
import YoutubePlayer from "../youtube-player/YoutubePlayer";


const ThirdSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  gap: 60px;
  @media (max-width: ${Viewports.tabletLandscape}px) {
    flex-direction: column;
  }
`

const VideosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: ${Viewports.tabletLandscape}px) {
    width: 60%;
  }
  align-content: stretch;
  div{
    height: 100%;
  }
  gap: 20px;
`

const ImageWrapper = styled.div`
  float: left;
  

  @media (min-width: ${Viewports.tabletLandscape}px) {
    width: 40%;
  }
  height: 100%;

  img {
    height: 100%;
    max-width: 100%;
    display: block;
    margin: auto;
  } 
`


const VR_VIDEO = 'https://www.youtube.com/watch?v=Zz7sx8rGYFw&ab_channel=CITRUSxLEMON'
const SHORT_VIDEO = 'https://www.youtube.com/watch?v=2BkFXj093lo&t=54s&ab_channel=CITRUSxLEMON'

const ThirdSection: React.FC = () => {

    const screenWidth = useWindowSize().width;

    const opts = {
        height: screenWidth > Viewports.tabletLandscape ? '100%' : '300px',
        width: '100%',
    };

    return (
        <Section backgroundType={BackgroundType.dark} dynamic>
            {screenWidth > Viewports.tabletLandscape ? (<>
                <ThirdSectionWrapper>
                    <ImageWrapper>
                        <img src={LemonGrabbing} alt={''}/>
                    </ImageWrapper>
                    <VideosWrapper>
                        <YoutubePlayer videoId={youtubeParser(VR_VIDEO)} {...opts} />
                        <YoutubePlayer videoId={youtubeParser(SHORT_VIDEO)} {...opts} />
                    </VideosWrapper>
                </ThirdSectionWrapper>
            </>) : (<ThirdSectionWrapper>
                <VideosWrapper>
                    <YoutubePlayer videoId={youtubeParser(VR_VIDEO)} {...opts}  />
                </VideosWrapper>
                <ImageWrapper>
                    <img src={LemonGrabbing} alt={''}/>
                </ImageWrapper>
                <VideosWrapper>
                    <YoutubePlayer videoId={youtubeParser(SHORT_VIDEO)} {...opts}  />
                </VideosWrapper>
            </ThirdSectionWrapper>
            )}
        </Section>
    )

}


export default ThirdSection;
