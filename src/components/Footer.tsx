import React from "react";
import styled from "styled-components";
import {Inner} from "../layout/Inner";
import {Viewports} from "../styles";


interface FooterProps {
    forPage?: boolean;
}

const FooterWrapper = styled.footer<{forPage: boolean}>`
  width: 100%;
  height: 50px;
  position: ${({ forPage }) => !forPage && "absolute"};
  bottom:20px;
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
  user-select: none;
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
  align-items: center;
  gap: 6px;
`

const CustomLink = styled.a`
  color: var(--logo-footer-grey);
  text-decoration: none;

  &:hover {
    color: var(--logo-footer-grey-hover);
  }

`


const Footer: React.FC = ({forPage = false }: FooterProps) => {


    return (
        <FooterWrapper forPage={forPage}>
            <Inner>
                <ContentFooterWrapper>
                    <CreditContainer>
                        <FooterLogoWrapper>
                            CITRUS x LEMON
                        </FooterLogoWrapper>
                        <div>
                            {'   '}By <CustomLink href={'https://unboolean.art/'}>UNBOOLEAN</CustomLink></div>
                    </CreditContainer>
                    <CustomLink href='https://www.instagram.com/oak_sky/'>
                        Contatti
                    </CustomLink>
                    <CustomLink href='https://www.instagram.com/oak_sky/'>
                        Policy
                    </CustomLink>
                    <CustomLink href='https://www.instagram.com/oak_sky/'>
                        Termini e condizioni
                    </CustomLink>
                </ContentFooterWrapper>
            </Inner>
        </FooterWrapper>
    )
}
export default Footer;
