import React from 'react';
import GlobalStyles from './styles';
import HeroSection from "./components/sections/HeroSection/HeroSection";
import {BackgroundType} from "./components/sections/Section";
import SecondSection from "./components/sections/SecondSection";
import ThirdSection from "./components/sections/ThirdSections";
import GoogleMapSection from "./components/sections/GoogleMapSection/GoogleMapSection";
import FifthSection from "./components/sections/FifthSection";
import LastSection from "./components/sections/LastSection";




function App() {
    return (
        <>
            <GlobalStyles/>
            <HeroSection/>
            <SecondSection/>
            <ThirdSection/>
            <GoogleMapSection/>
            <FifthSection backgroundType={BackgroundType.dark}/>
            <LastSection backgroundType={BackgroundType.light}/>
        </>
    );
}

export default App;
