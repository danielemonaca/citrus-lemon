import React, {ReactNode} from "react";
import styled from "styled-components";
import {Inner} from "../../layout/Inner";
import DarkBackground from "../../assets/backgrounds/darker-background.png";
import LightBackground from "../../assets/backgrounds/light-background.png";

export enum BackgroundType {
    dark = 'dark',
    light = 'light'
}

export interface SectionProps {
    backgroundType: BackgroundType;
    children: ReactNode;
    dynamic?: boolean;
}

const ContentWrapper = styled.div`
  padding: 100px 0 ;
  min-height: calc(100% - 200px);
`

const SectionWrapper = styled.section<{backgroundType: BackgroundType, isDynamic?: boolean}>`
  min-height: ${({isDynamic}) => isDynamic ? '60vh' : '100vh'};
  width: 100%;
  z-index: -2;
  background: url(${({backgroundType}) => backgroundType === BackgroundType.light ? LightBackground : DarkBackground })  center center;
`

const Section: React.FC = ({backgroundType, children, dynamic}: SectionProps) => {

    return (
        <SectionWrapper backgroundType={backgroundType} isDynamic={dynamic}>
            <Inner>
                <ContentWrapper>
                {children}
                </ContentWrapper>
            </Inner>
        </SectionWrapper>)
}


export default Section;
