import React from "react";
import styled from "styled-components";
import {Inner} from "../layout/Inner";


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
`

const FooterLogoWrapper = styled.div`
  padding: 10px 10px;
  border-radius: 2px;
  background: var(--logo-footer-grey);
  color: white;
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
`

const Footer: React.FC = () => {

    return (
        <FooterWrapper>
            <Inner>
                <ContentFooterWrapper>
                    <FooterLogoWrapper>
                        CITRUS x LEMON
                    </FooterLogoWrapper>
                    <div>
                        Copyright © 2020 citrus-x-lemon.web.app
                    </div>
                    <div>
                        Contatti
                    </div>
                    <div>
                        Feedback
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
