import writePositionData from "../services/position.service";
import {useEffect, useState} from "react";
import PageLayout from "./PageLayout";
import GoogleMapComponent from "../components/sections/GoogleMapSection/GoogleMapComponent";
import YoutubePlayer from "../components/youtube-player/YoutubePlayer";
import {ButtonWrapper, CustomButton, GoogleMapContainer} from "./FirstPage";
import youtubeParser from "../utils/youtubeParser";
import {VR_VIDEO} from "../components/sections/ThirdSections";


export default function SecondPage() {

    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        writePositionData(2);
    }, []);


    return (
        <PageLayout>
            {!showMap ? (<YoutubePlayer title={'360 video'} videoId={youtubeParser(VR_VIDEO)} />) : (
                <GoogleMapContainer>
                    <GoogleMapComponent/>
                </GoogleMapContainer>)}
            <ButtonWrapper>
                <CustomButton onClick={(e) => setShowMap(true)}>GUARDA LA MAPPA</CustomButton>
            </ButtonWrapper>
        </PageLayout>
    );
}
