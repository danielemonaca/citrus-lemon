import React from "react";
import styled from "styled-components";
import Section, {BackgroundType} from "../Section";
import GoogleMap from "./GoogleMap";

const GoogleMapSection: React.FC = () => {
    return (
        <Section backgroundType={BackgroundType.light}>
            <GoogleMap/>
        </Section>

    )

}


export default GoogleMapSection;
