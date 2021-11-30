import Header from "../components/Header";
import React from "react";
import Section, {BackgroundType} from "../components/sections/Section";
import Footer from "../components/Footer";
import styled from "styled-components";

interface PageLayoutProps {
    children?: React.ReactNode
}

const ChildrenWrapper = styled.div`
  position: relative;
`

export default function PageLayout({children}: PageLayoutProps) {
    return(
        <div>
            <Header/>
            <Section background={BackgroundType.light} >
                <ChildrenWrapper>
            {children}
                </ChildrenWrapper>
            </Section>
            <Footer/>
        </div>
    )

}
