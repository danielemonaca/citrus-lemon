import PageLayout from "./PageLayout";
import React, {useEffect} from "react";
import LemonGrabbing from "../assets/LemonGrabbing.gif";
import styled from "styled-components";
import writePositionData from "../services/position.service";

const Image = styled.img`
  display: block;
  margin: auto;
  width: 100%;
`


export default function FirstPage() {

    useEffect(() => {
        writePositionData(1);
    }, []);


    return (
        <PageLayout>
            <Image src={LemonGrabbing} alt={''}/>
        </PageLayout>
    );
}
