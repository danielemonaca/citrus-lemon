import React from "react";
import styled from "styled-components";



const StyledPinkRectangle = styled.div`
  background: var(--pink);
  width: 48px;
  height: 60px;
  border-radius: 11px;
  opacity: 0.8;
  position: absolute;
`

const PinkRectangle: React.FC = ({className}) => {

    return (
         <StyledPinkRectangle className={className} />
    )

}


export default PinkRectangle;
