import React from "react";
import Section, {BackgroundType} from "./Section";
import styled from "styled-components";
import Headline from "../Headline";
import Text from "../Text";
import YouTube from "react-youtube";
import youtubeParser from "../../utils/youtubeParser";
import LemonWithoutBackground from "../../assets/lemonWithoutBackground.png";
import LemonWithBackground from "../../assets/lemonWithBackground.png";
import DraftLemons from "../../assets/DraftLemons.png";
import Image from '../Image';
import PinkRectangle from "../PinkRectangle";
import useWindowSize from "../../utils/hooks/useWindowSize";
import {Viewports} from "../../styles";
import LemonWithTreeBackground from "../../assets/LemonWithTreeBackground.png";


const VideoWrapper = styled.div`
  margin-top: 30px;
  @media (min-width: ${Viewports.tabletLandscape}px) {
    width: 50%;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

`

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`


const CustomImage = styled(Image)`

  width: 100%;
  
  @media (min-width: ${Viewports.tabletLandscape}px) {
    min-width: 0;

    &:first-child {
      height: auto;
    }

    &:not(:first-child) {
      height: 100%;
      width: auto;
    }
  }

`

const Spacer = styled.div`
  margin-top: 70px;
`

const StyledFirstPinkRectangle = styled(PinkRectangle)`
  right: 75px;
  top: 5px;
  @media (max-width: ${Viewports.tabletLandscape}px) {
    top: -30px;
  }
  transform: rotate(-170deg);
`

const StyledSecondPinkRectangle = styled(PinkRectangle)`
  right: -6px;
  top: 20px;
  @media (max-width: ${Viewports.tabletLandscape}px) {
    top: -30px;
  }

  transform: rotate(-45deg);
`

const StyledThirdPinkRectangle = styled(PinkRectangle)`
  right: 228px;
  top: -32px;
  transform: rotate(70deg);
`

const FirstColumn = styled.div`
  width: 50%;
`

const ImageWrapper = styled.div`
  position: relative;
`

const FifthSection: React.FC = () => {

    const screenWidth = useWindowSize().width;

    const opts = {
        height: '390',
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
            {screenWidth > Viewports.tablet ? (<>
                <ContentWrapper>
                    <FirstColumn>
                        <Headline>Produzione</Headline>
                        <Text>
                            Il limone è un frutto figlio dell'evoluzione e delle necessità umane, ibrido venuto fuori
                            dall'unione del cedro e all'arancio amaro, quest'ultimo a sua volte è un ibrido di altri
                            frutti.
                            Ciò rappresenta anche l'ibridità terrestre, della natura e quindi dell'uomo. Ecco perché
                            l'ho
                            scelto come simbolo come allegoria. Anche se sembra un frutto "naturale" in realtà non lo è,
                            ma
                            cosa lo è? Ha ancora senso fare questo tipo di ragionamento? Lo ha mai avuto? L'ambiguità
                            della
                            parola e sopruso odierno genera queste e altre domande.
                            <br/>
                            I video hanno un racconto di tipo ontologico, ma comunque intrecciato. L'animazione a
                            tecnica
                            mista è stato un mezzo così come la fotografia, la realtà virtuale e il suono, con
                            l'accompagnamento musicale composto da <strong>Giuseppe Verzino</strong>.
                            <br/>Preparate le seeds bomb (palline di semi di limone), con argilla e fertilizzante
                            naturale,
                            dello spago le lega i delle etichette con dei codici QR che riconducevano ai video, e una
                            volta
                            scansionati davano la posizione della scansione, la parte di programmazione del sito web è
                            opera
                            di <strong>Daniele Monaca</strong>, spalle e protesi umana.
                            <br/> Le seeds bomb sono state distribuite ad amici e conoscenti vari nella speranza che li
                            piantassero in luoghi a loro scelta, anche e soprattutto quelli in cui la natura cerca di
                            riappropriarsi dei propri luoghi come angoli delle strade o luoghi abbandonati
                        </Text>

                    </FirstColumn>
                    <VideoWrapper>
                        <YouTube
                            videoId={youtubeParser('https://www.youtube.com/watch?v=2BkFXj093lo&t=54s&ab_channel=CITRUSxLEMON')}
                            opts={opts} onReady={_onReady}/>
                    </VideoWrapper>
                </ContentWrapper>
                <ImagesWrapper>
                    <ImageWrapper>
                        <CustomImage src={LemonWithoutBackground} alt={''}/>
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledFirstPinkRectangle/>
                        <CustomImage src={LemonWithBackground} alt={''}/>
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledSecondPinkRectangle/>
                        <CustomImage src={DraftLemons} alt={''}/>
                    </ImageWrapper>
                </ImagesWrapper></>) : (<>
                <ImageWrapper>
                    <CustomImage src={LemonWithoutBackground} alt={''}/>
                </ImageWrapper>
                <Headline>Produzione</Headline>
                <Text>
                    Il limone è un frutto figlio dell'evoluzione e delle necessità umane, ibrido venuto fuori
                    dall'unione del cedro e all'arancio amaro, quest'ultimo a sua volte è un ibrido di altri frutti.
                    Ciò rappresenta anche l'ibridità terrestre, della natura e quindi dell'uomo. Ecco perché l'ho
                    scelto come simbolo come allegoria. Anche se sembra un frutto "naturale" in realtà non lo è, ma
                    cosa lo è? Ha ancora senso fare questo tipo di ragionamento? Lo ha mai avuto? L'ambiguità della
                    parola e sopruso odierno genera queste e altre domande.
                    <br/>
                </Text>
                <VideoWrapper>
                    <YouTube
                        videoId={youtubeParser('https://www.youtube.com/watch?v=2BkFXj093lo&t=54s&ab_channel=CITRUSxLEMON')}
                        opts={opts} onReady={_onReady}/>
                </VideoWrapper>
                <Text>
                    I video hanno un racconto di tipo ontologico, ma comunque intrecciato. L'animazione a tecnica
                    mista è stato un mezzo così come la fotografia, la realtà virtuale e il suono, con
                    l'accompagnamento musicale composto da <strong>Giuseppe Verzino</strong>.
                    <br/>Preparate le seeds bomb (palline di semi di limone), con argilla e fertilizzante naturale,
                    dello spago le lega i delle etichette con dei codici QR che riconducevano ai video, e una volta
                    scansionati davano la posizione della scansione, la parte di programmazione del sito web è opera
                    di <strong>Daniele Monaca</strong>, spalle e protesi umana.
                    <br/> Le seeds bomb sono state distribuite ad amici e conoscenti vari nella speranza che li
                    piantassero in luoghi a loro scelta, anche e soprattutto quelli in cui la natura cerca di
                    riappropriarsi dei propri luoghi come angoli delle strade o luoghi abbandonati
                </Text>
                <Spacer/>
                    <ImageWrapper>
                        <StyledSecondPinkRectangle/>
                        <CustomImage src={DraftLemons} alt={''}/>
                    </ImageWrapper>
                <Spacer/>
                    <ImageWrapper>
                        <StyledFirstPinkRectangle/>
                        <CustomImage src={LemonWithBackground} alt={''}/>
                    </ImageWrapper>
                <Spacer/>
                <ImageWrapper>
                <StyledThirdPinkRectangle/>
                <Image src={LemonWithTreeBackground} alt={''}/>
                </ImageWrapper>
            </>)}

        </Section>
    );


};


export default FifthSection;
