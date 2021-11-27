import PageLayout from "./PageLayout";
import React from "react";
import LemonGrabbing from "../assets/LemonGrabbing.gif";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  margin: auto;
  width: 100%;
`

export default function FirstPage() {
    return (
        <PageLayout>
            <Image src={LemonGrabbing} alt={''}/>
        </PageLayout>
    );
}
