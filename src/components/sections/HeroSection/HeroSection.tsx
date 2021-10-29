import React from 'react';
import styled from "styled-components";
import Header from "../../Header";
import {ReactComponent as Eye} from '../../../assets/eye.svg';
import {Viewports} from "../../../styles";


interface EyeLineProps {
    nElements: number;
    firstColor: EyeColors;
    secondColor: EyeColors;
    justifyContent: JustifyContent;
}

enum EyeColors {
    white = "white",
    pink = "#F3819A",
    yellow = "#E2C15A",
}

enum JustifyContent {
    start='start',
    end='end'
}


const EyeLineWrapper = styled.div<{justifyContent: JustifyContent}>`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent};
  flex-direction: ${({justifyContent}) => justifyContent === 'start' ? 'row' : 'row-reverse'};
  height: 16%;
`

const Image = styled(Eye)`
  width: 300px;
`

const EmptyBox = styled.div`
  width: 300px;
`

const EyeLine: React.FC = ({nElements, firstColor, secondColor, justifyContent}: EyeLineProps) => {
    return (
        <>
            <EyeLineWrapper justifyContent={justifyContent}>
                {[...Array(nElements)].map((e,i) => <Image width='auto' fill={i % 2 === 0 ? firstColor : secondColor}/> )}
                <EmptyBox/>
            </EyeLineWrapper>
        </>);
}


const FirstSectionWrapper = styled.div`
  background: var(--header-background);
  color: white;
  
`

const HeroSectionWrapper = styled.section`
  max-width: ${Viewports.desktop}px;
  margin: 0 auto;
  padding-bottom: 100px;
`

const BigText = styled.h1`
  height: 28%;
  font-size: 19vw;
  margin: auto 10px;
  text-align: center;
  @media (min-width: ${Viewports.desktop}px) {
    font-size: 280px;
  }
  
`


const HeroSection: React.FC = () => {

    return (<FirstSectionWrapper dynamic>
            <Header/>
            <HeroSectionWrapper>
                <EyeLine nElements={6} firstColor={EyeColors.white} secondColor={EyeColors.pink} justifyContent={JustifyContent.start}/>
                <EyeLine nElements={6} firstColor={EyeColors.yellow} secondColor={EyeColors.pink} justifyContent={JustifyContent.end}/>
                <div><BigText>CITRUS x LEMON</BigText></div>
                <EyeLine nElements={6} firstColor={EyeColors.yellow} secondColor={EyeColors.pink} justifyContent={JustifyContent.start}/>
                <EyeLine nElements={6} firstColor={EyeColors.white} secondColor={EyeColors.pink} justifyContent={JustifyContent.end}/>
            </HeroSectionWrapper>

        </FirstSectionWrapper>
    );
}

export default HeroSection;
