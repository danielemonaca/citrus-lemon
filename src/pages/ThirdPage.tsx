import writePositionData from "../services/position.service";
import {useEffect, useState} from "react";
import PageLayout from "./PageLayout";
import GoogleMapComponent from "../components/sections/GoogleMapSection/GoogleMapComponent";
import styled from "styled-components";
import {CustomButton, GoogleMapContainer} from "./FirstPage";
import youtubeParser from "../utils/youtubeParser";
import YoutubePlayer from "../components/youtube-player/YoutubePlayer";
import {SHORT_VIDEO} from "../components/sections/ThirdSections";
import {Link} from "react-router-dom";

const ButtonWrapper = styled.div`
  width: 100%;
`

export default function ThirdPage() {

    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        writePositionData(3);
    }, []);


    return (
        <PageLayout>
            {!showMap ? (<YoutubePlayer title={'short video'} videoId={youtubeParser(SHORT_VIDEO)} />) : (
                <GoogleMapContainer>
                    <GoogleMapComponent/>
                </GoogleMapContainer>)}
            <ButtonWrapper>
                {showMap ? (<Link to="/" style={{ textDecoration: 'none' }}>
                    <CustomButton>VAI AL PROGETTO</CustomButton>
                </Link>) : (<>
                    <CustomButton onClick={() => setShowMap(true)}>GUARDA LA MAPPA</CustomButton>
                </>)}
            </ButtonWrapper>
        </PageLayout>
    );
}
