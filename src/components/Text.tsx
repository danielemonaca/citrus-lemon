import React from 'react';
import styled from "styled-components";
import {Viewports} from "../styles";

export interface TextProps {
    className?: string;
    children: string;
}

const Text: React.FC<TextProps> = ({ children, className }: TextProps) => {

    const TextWrapper = styled.p`
      font-family: "Zilla Slab", sans-serif;
      font-size: 15px;
      @media (min-width: ${Viewports.tablet}px) {
        font-size: 20px;
      }
      font-weight: 500;
      color: var(--text-color);
    `


    return (
        <TextWrapper className={className}>
            {children}
        </TextWrapper>
    );
}

export default Text;
