import Header from "../components/Header";
import React from "react";
import Section, {BackgroundType} from "../components/sections/Section";
import Footer from "../components/Footer";

interface PageLayoutProps {
    children?: React.ReactNode
}


export default function PageLayout({children}: PageLayoutProps) {
    return(
        <div>
            <Header/>
            <Section background={BackgroundType.light} dynamic>
            {children}
            </Section>
            <Footer/>
        </div>
    )

}
