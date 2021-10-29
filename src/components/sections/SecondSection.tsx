import React from "react";
import Section, {BackgroundType} from "./Section";
import styled from "styled-components";
import firstImageSecondSection from '../../assets/firstImageSecondSection.png';
import secondImageSecondSection from '../../assets/secondImageSecondSection.png';
import PinkRectangle from "../PinkRectangle";
import Headline from "../Headline";
import Text from "../Text";
import Image from '../Image';

const SecondSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 60px;
`

const ImagesWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
`

const TextWrapper = styled.div`
  width: 55%;
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

    return (
        <Section backgroundType={BackgroundType.light}>
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
                        <strong>CITRUS x LEMON</strong> è una performance collaborativa che vive attraverso diversi media.<br/>
                        Una riflessione su quanto l'essere umano è cosciente della sua ibridità, di essere parte di un sistema, dell'accettazione dei propri limiti e potenzialità umane in collaborazione con l'ambiente che vive.<br/>
                        Cercando di comprendere meglio l' intreccio con la contemporanea realtà "umida", non più  quindi binaria: analogica o digitale, organica o inorganica, asciutta o bagnata. Quindi capire come l'uomo vive questo contesto, le multiple realtà che avvengono parallelamente nel virtuale ormai mischiate a una realtà accettata comunemente come "vera", rendendo quasi invisibile il confine tra le diverse realtà.<br/>

                    </Text>
                    <Headline>Performance</Headline>
                    <Text>
                        Divisa per fasi, la performance comprende:<br/>
                        <strong>Guerrilla Gardening.</strong> Attraverso delle Seeds Bomb (palle di terra con semi di limone all'interno) da me distribuite ai fruitori e che a loro volta le metteranno nei luoghi che preferiscono, diventando così co-autori della performance;<br/>
                        <strong>Visione Video.</strong> Alle seeds bomb sono attaccate con dello spago dei codici QR da scansionare (con la camera del proprio cellulare) per visionare dei video in cui rifletto dei temi sopra trattati attraverso il simbolico frutto del limone che in questo è cosciente. Ovviamente essendo sparsi in diversi luoghi anche pubblici chiunque può potenzialmente vedere i video;<br/>
                        <strong>Monitoraggio su mappa.</strong> Dopo la visione del video si può accedere a una mappa che indicherà la posizione di ogni piantina piantata e scansionata dagli altri utenti.<br/>
                        <strong>Il corso della natura.</strong>  I semi di limone avranno la possibilità di germogliare e crescere in autonomia, anche in posti non predisposti dalla società, per via delle componenti fertilizzanti inserite nella pallina di terra. E' possibile andare a fare un controllo in loco e non si esclude la cura delle piante da parte dei fruitori se ne avessero voglia, si ricorda che affinché il limone produca frutti è necessaria una procedura d'innesto.<br/>
                        L'installazione delle piante è iniziata a Ottobre 2020 basato sulla infinita ciclicità della natura non è possibile definire il termine della performance.<br/>

                    </Text>
                </TextWrapper>

            </SecondSectionWrapper>
        </Section>
    )

}


export default SecondSection;
