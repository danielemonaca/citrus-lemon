import React from "react";
import Section, {BackgroundType} from "../Section";
import GoogleMapComponent from "./GoogleMapComponent";
import styled from "styled-components";


const GoogleMapContainer = styled.div`
  height: 90vh;
  width: 100%;
`

const GoogleMapSection: React.FC = () => {
    return (
        <Section backgroundType={BackgroundType.light} dynamic>
            <GoogleMapContainer>
            <GoogleMapComponent/>
            </GoogleMapContainer>
        </Section>

    )
}


export default GoogleMapSection;
