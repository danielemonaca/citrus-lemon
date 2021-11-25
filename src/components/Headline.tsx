import React from 'react';
import styled from "styled-components";
import {Viewports} from "../styles";

export interface HeadlineProps {
    className?: string;
    children: string;
}



const HeadlineWrapper = styled.h4`
      font-family: "Zilla Slab", sans-serif;
      font-weight: 700;
      margin-bottom: 0;
      font-size: 25px;
      @media (min-width: ${Viewports.tablet}px) {
        font-size: 40px;
      }
      color: var(--grey);
    `


const Headline: React.FC<HeadlineProps> = ({ children, className }: HeadlineProps) => {

    return (
        <HeadlineWrapper className={className}>
            {children}
        </HeadlineWrapper>
    );
}

export default Headline;
