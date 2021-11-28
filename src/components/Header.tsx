import React from 'react';
import styled from "styled-components";
import {Inner} from "../layout/Inner";
import logoGif from '../assets/blink-limone.gif';
import {Viewports} from "../styles";


const HeaderWrapper = styled.div`
  color: white;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  @media (max-width: ${Viewports.tablet}px) {
    flex-direction: column;
  }
`

const LogoWrapperLink = styled.a`
  margin: auto 0; 
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-content: center;
  vertical-align: middle;
  align-items: center;
  @media (max-width: ${Viewports.tablet}px) {
    justify-content: flex-start;
  }
`

const TextLogo = styled.span`
  font-size: 36px;
  font-family: 'Amatic SC', serif;
  font-weight: bold;
`

/*
const Menu = styled.nav`
  display: flex;
  justify-content: space-evenly;
  float: right;
  align-content: center;
  vertical-align: middle;
  align-items: center;
  gap: 30px;
  font-family: "Zilla Slab", sans-serif;
  font-size: 25px;
`

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.7em;

  &:hover {
    text-decoration: underline;
  }
`*/

const HeaderContainer = styled.header`
  background: var(--header-background);
`

const Header: React.FC = () => {

    return (
        <HeaderContainer>
        <Inner>
            <HeaderWrapper>
                <LogoWrapperLink href='/'>
                    <img
                        width="119px"
                        alt='Vai alla homepage'
                        src={logoGif}
                    />
                    <TextLogo>Citrus X Lemon</TextLogo>
                </LogoWrapperLink>
                {/*<Menu>
                    <MenuItem href='#'>
                        VIDEO
                    </MenuItem>
                    <MenuItem href='#'>
                        MAPPA
                    </MenuItem>
                    <MenuItem href='#'>
                        PRODUZIONE
                    </MenuItem>

                </Menu> */}
            </HeaderWrapper>
        </Inner>
        </HeaderContainer>
    );
}

export default Header;
