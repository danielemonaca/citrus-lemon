import React from "react";
import Section, {BackgroundType} from "../Section";
import GoogleMap from "./GoogleMap";
import styled from "styled-components";

const GoogleMapContainer = styled.div`
  height: 90vh;
  width: 100%;
`

const GoogleMapSection: React.FC = () => {
    return (
        <Section backgroundType={BackgroundType.light} dynamic>
            <GoogleMapContainer>
            <GoogleMap/>
            </GoogleMapContainer>
        </Section>

    )
}


export default GoogleMapSection;
