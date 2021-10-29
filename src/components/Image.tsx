import React from "react";
import styled from "styled-components";

export interface ImageProps {
    className: string;
    src: string;
}

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`

const Image: React.FC = ({className, src}: ImageProps) => {
    return (
        <StyledImage className={className} src={src} />
    )

}


export default Image;
