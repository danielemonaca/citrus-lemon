import React from "react";
import Section, {BackgroundType} from "./Section";
import styled from "styled-components";
import firstImageSecondSection from '../../assets/firstImageSecondSection.png';
import secondImageSecondSection from '../../assets/secondImageSecondSection.png';
import PinkRectangle from "../PinkRectangle";
import Headline from "../Headline";
import Text from "../Text";
import Image from '../Image';
import useWindowSize from "../../utils/hooks/useWindowSize";


const MOBILE_VIEW_THRESHOLD = 1000;

const SecondSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 60px;
`

const ImagesWrapper = styled.div`
  @media (min-width: ${MOBILE_VIEW_THRESHOLD}px) {
    width: 45%;
  }
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
`

const MobileImage = styled(Image)`
  width: 100%;
`

const TextWrapper = styled.div`
  @media (min-width: ${MOBILE_VIEW_THRESHOLD}px) {
    width: 55%;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`

const ImageWrapper = styled.div`
  position: relative;
`

const StyledFirstPinkRectangle = styled(PinkRectangle)`
  left: -22px;
  top: -10px;
  transform: rotate(45deg);
`

const StyledSecondPinkRectangle = styled(PinkRectangle)`
  right: -31px;
  top: 27px;
  transform: rotate(-45deg);
`

const SecondSection: React.FC = () => {

    const screenWidth: number = useWindowSize().width;

    return (
        <Section backgroundType={BackgroundType.light}>
            {screenWidth > MOBILE_VIEW_THRESHOLD ? (
                    <SecondSectionWrapper>
                        <ImagesWrapper>
                            <ImageWrapper>
                                <StyledFirstPinkRectangle/>
                                <Image src={firstImageSecondSection} alt='QRCode placed on a crosswalk'/>
                            </ImageWrapper>
                            <ImageWrapper>
                                <StyledSecondPinkRectangle/>
                                <Image src={secondImageSecondSection} alt='QRCode placed on a crosswalk'/>
                            </ImageWrapper>
                        </ImagesWrapper>
                        <TextWrapper>
                            <Headline>Progetto</Headline>
                            <Text>
                                <strong>CITRUS x LEMON</strong> ?? una performance collaborativa che vive attraverso diversi
                                media.<br/>
                                Una riflessione su quanto l'essere umano ?? cosciente della sua ibridit??, di essere parte di
                                un sistema, dell'accettazione dei propri limiti e potenzialit?? umane in collaborazione con
                                l'ambiente che vive.<br/>
                                Cercando di comprendere meglio l' intreccio con la contemporanea realt?? "umida", non pi??
                                quindi binaria: analogica o digitale, organica o inorganica, asciutta o bagnata. Quindi
                                capire come l'uomo vive questo contesto, le multiple realt?? che avvengono parallelamente nel
                                virtuale ormai mischiate a una realt?? accettata comunemente come "vera", rendendo quasi
                                invisibile il confine tra le diverse realt??.<br/>

                            </Text>
                            <Headline>Performance</Headline>
                            <Text>
                                Divisa per fasi, la performance comprende:<br/>
                                <strong>Guerrilla Gardening.</strong> Attraverso delle Seeds Bomb (palle di terra con semi
                                di limone all'interno) da me distribuite ai fruitori e che a loro volta le metteranno nei
                                luoghi che preferiscono, diventando cos?? co-autori della performance;<br/>
                                <strong>Visione Video.</strong> Alle seeds bomb sono attaccate con dello spago dei codici QR
                                da scansionare (con la camera del proprio cellulare) per visionare dei video in cui rifletto
                                dei temi sopra trattati attraverso il simbolico frutto del limone che in questo ?? cosciente.
                                Ovviamente essendo sparsi in diversi luoghi anche pubblici chiunque pu?? potenzialmente
                                vedere i video;<br/>
                                <strong>Monitoraggio su mappa.</strong> Dopo la visione del video si pu?? accedere a una
                                mappa che indicher?? la posizione di ogni piantina piantata e scansionata dagli altri utenti.<br/>
                                <strong>Il corso della natura.</strong> I semi di limone avranno la possibilit?? di
                                germogliare e crescere in autonomia, anche in posti non predisposti dalla societ??, per via
                                delle componenti fertilizzanti inserite nella pallina di terra. E' possibile andare a fare
                                un controllo in loco e non si esclude la cura delle piante da parte dei fruitori se ne
                                avessero voglia, si ricorda che affinch?? il limone produca frutti ?? necessaria una procedura
                                d'innesto.<br/>
                                L'installazione delle piante ?? iniziata a Ottobre 2020 basato sulla infinita ciclicit?? della
                                natura non ?? possibile definire il termine della performance.<br/>

                            </Text>
                        </TextWrapper>

                    </SecondSectionWrapper>
                ) :
                (<>
                        <ImageWrapper>
                            <StyledFirstPinkRectangle/>
                            <MobileImage src={firstImageSecondSection} alt='QRCode placed on a crosswalk'/>
                        </ImageWrapper>

                    <TextWrapper>
                        <Headline>Progetto</Headline>
                        <Text>
                            <strong>CITRUS x LEMON</strong> ?? una performance collaborativa che vive attraverso diversi
                            media.<br/>
                            Una riflessione su quanto l'essere umano ?? cosciente della sua ibridit??, di essere parte di
                            un sistema, dell'accettazione dei propri limiti e potenzialit?? umane in collaborazione con
                            l'ambiente che vive.<br/>
                            Cercando di comprendere meglio l' intreccio con la contemporanea realt?? "umida", non pi??
                            quindi binaria: analogica o digitale, organica o inorganica, asciutta o bagnata. Quindi
                            capire come l'uomo vive questo contesto, le multiple realt?? che avvengono parallelamente nel
                            virtuale ormai mischiate a una realt?? accettata comunemente come "vera", rendendo quasi
                            invisibile il confine tra le diverse realt??.<br/>

                        </Text>
                        <ImageWrapper>
                            <StyledSecondPinkRectangle/>
                            <MobileImage src={secondImageSecondSection} alt='QRCode placed on a crosswalk'/>
                        </ImageWrapper>
                        <Headline>Performance</Headline>
                        <Text>
                            Divisa per fasi, la performance comprende:<br/>
                            <strong>Guerrilla Gardening.</strong> Attraverso delle Seeds Bomb (palle di terra con semi
                            di limone all'interno) da me distribuite ai fruitori e che a loro volta le metteranno nei
                            luoghi che preferiscono, diventando cos?? co-autori della performance;<br/>
                            <strong>Visione Video.</strong> Alle seeds bomb sono attaccate con dello spago dei codici QR
                            da scansionare (con la camera del proprio cellulare) per visionare dei video in cui rifletto
                            dei temi sopra trattati attraverso il simbolico frutto del limone che in questo ?? cosciente.
                            Ovviamente essendo sparsi in diversi luoghi anche pubblici chiunque pu?? potenzialmente
                            vedere i video;<br/>
                            <strong>Monitoraggio su mappa.</strong> Dopo la visione del video si pu?? accedere a una
                            mappa che indicher?? la posizione di ogni piantina piantata e scansionata dagli altri utenti.<br/>
                            <strong>Il corso della natura.</strong> I semi di limone avranno la possibilit?? di
                            germogliare e crescere in autonomia, anche in posti non predisposti dalla societ??, per via
                            delle componenti fertilizzanti inserite nella pallina di terra. E' possibile andare a fare
                            un controllo in loco e non si esclude la cura delle piante da parte dei fruitori se ne
                            avessero voglia, si ricorda che affinch?? il limone produca frutti ?? necessaria una procedura
                            d'innesto.<br/>
                            L'installazione delle piante ?? iniziata a Ottobre 2020 basato sulla infinita ciclicit?? della
                            natura non ?? possibile definire il termine della performance.<br/>

                        </Text>
                    </TextWrapper>
                </>)}
        </Section>
    )

}


export default SecondSection;
