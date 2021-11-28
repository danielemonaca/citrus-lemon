
import GoogleMapComponent from "../components/sections/GoogleMapSection/GoogleMapComponent";
import styled from "styled-components";

export default function CreateScan() {

    const GoogleMapContainer = styled.div`
      height: 90vh;
      width: 100%;
    `
    return (
        <GoogleMapContainer>
            <GoogleMapComponent clickable/>
        </GoogleMapContainer>
    );
}
