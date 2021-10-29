import React from "react";
import Section, {BackgroundType} from "./Section";
import styled from "styled-components";
import DrawingQRCode from "../../assets/DrawingQRCode.png";
import Image from '../Image';
import PinkRectangle from "../PinkRectangle";
import LemonWithTreeBackground from "../../assets/LemonWithTreeBackground.png";
import PlantingSeeds from "../../assets/plantingSeeds.png";
import QRCode from "../../assets/QRCode.png";
import LemonSeeds from "../../assets/LemonSeeds.png";
import Footer from "../Footer";
import {Viewports} from "../../styles";


const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin-bottom: 50px;
  flex-basis: 0;
`

const FirstRowImageContainer = styled.div`
  width: 50%;
  @media (max-width: ${Viewports.tablet}px) {
    width: 100%;
  }
  position: relative;
`

const SecondRowImageContainer = styled.div`
  min-width: 30%;
  position: relative;
`

const StyledFirstPinkRectangle = styled(PinkRectangle)`
  right: 228px;
  top: -32px;
  transform: rotate(70deg);
`

const StyledSecondPinkRectangle = styled(PinkRectangle)`
  right: -10px;
  bottom: -20px;
  transform: rotate(20deg);
`

const StyledThirdPinkRectangle = styled(PinkRectangle)`
  right: -30px;
  top: -10px;
  transform: rotate(20deg);
`

const StyledForthPinkRectangle = styled(PinkRectangle)`
  right: -15px;
  bottom: -14px;
  transform: rotate(-20deg);
`


const FifthSection: React.FC = () => {

    return (
        <Section backgroundType={BackgroundType.light} dynamic>
            <ImagesWrapper className='wrap'>
                <FirstRowImageContainer>
                    <Image src={DrawingQRCode} alt={''}/>
                </FirstRowImageContainer>
                <FirstRowImageContainer>
                    <StyledFirstPinkRectangle/>
                    <Image src={LemonWithTreeBackground} alt={''}/>
                </FirstRowImageContainer>
            </ImagesWrapper>
            <ImagesWrapper className='wrap'>
                <SecondRowImageContainer>
                    <StyledSecondPinkRectangle/>
                    <Image src={PlantingSeeds} alt={''}/></SecondRowImageContainer>
                <SecondRowImageContainer>
                    <StyledThirdPinkRectangle/>
                    <Image src={LemonSeeds} alt={''}/></SecondRowImageContainer>
                <SecondRowImageContainer>
                    <StyledForthPinkRectangle/>
                    <Image src={QRCode} alt={''}/></SecondRowImageContainer>
            </ImagesWrapper>
            <Footer/>
        </Section>
    )

}


export default FifthSection;
