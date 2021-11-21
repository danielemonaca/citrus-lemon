import React from "react";
import styled from "styled-components";
import {Inner} from "../layout/Inner";
import {Viewports} from "../styles";


const FooterWrapper = styled.footer`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 20px;
  left: 0;
`

const ContentFooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-family: 'Zilla Slab', cursive;
  align-items: center;
  @media (max-width: ${Viewports.tablet}px) {
    font-size: 0.5em;
  }
  font-weight: 500;
`

const FooterLogoWrapper = styled.div`
  padding: 10px 10px;
  border-radius: 2px;
  background: var(--logo-footer-grey);
  color: white;
  font-family: 'Amatic SC', cursive;
  font-size: 25px;
  @media (max-width: ${Viewports.tablet}px) {
    font-size: 1.5em;
  }
`

const CreditContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 6px;
`

const Footer: React.FC = () => {


    return (
        <FooterWrapper>
            <Inner>
                <ContentFooterWrapper>
                    <CreditContainer>
                    <FooterLogoWrapper>
                        CITRUS x LEMON
                    </FooterLogoWrapper>
                        <div>
                        {'   '}By UNBOOLEAN</div>
                    </CreditContainer>
                    <div>
                        Contatti
                    </div>
                    <div>
                        Policy
                    </div>
                    <div>
                        Termini e condizioni
                    </div>
                </ContentFooterWrapper>
            </Inner>
        </FooterWrapper>
    )
}


export default Footer;
