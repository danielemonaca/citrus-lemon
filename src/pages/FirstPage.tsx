import PageLayout from "./PageLayout";
import React, {useEffect, useState} from "react";
import LemonGrabbing from "../assets/LemonGrabbing.gif";
import styled from "styled-components";
import GoogleMapComponent from "../components/sections/GoogleMapSection/GoogleMapComponent";
import writePositionData from "../services/position.service";

const Image = styled.img`
  display: block;
  margin: auto;
  width: 80%;
  z-index: 10;
`

export const GoogleMapContainer = styled.div`
  width: 100%;
  height: 70vh;
`

export const CustomButton = styled.button`
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  background: var(--grey);
  display: block;
  margin: 30px auto;
`

export const ButtonWrapper = styled.div`
  width: 100%;

`


export default function FirstPage() {

    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        writePositionData(1);
    }, []);


    return (
        <PageLayout>
            {!showMap ? (<Image src={LemonGrabbing} alt={''}/>) : (
                <GoogleMapContainer>
                    <GoogleMapComponent/>
                </GoogleMapContainer>)}
            <ButtonWrapper>
                <CustomButton onClick={(e) => setShowMap(true)}>GUARDA LA MAPPA</CustomButton>
            </ButtonWrapper>
        </PageLayout>
    );
}
