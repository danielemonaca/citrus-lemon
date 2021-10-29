import React from 'react';
import styled from "styled-components";
import {Inner} from "../layout/Inner";
import logoGif from '../assets/blink-limone.gif';

const Header: React.FC = () => {

    const HeaderWrapper = styled.header`
      color: white;
      height: var(--header-height);
      display: flex;
      justify-content: space-between;
    `

    const LogoWrapperLink = styled.a`
      margin: auto 0;
      all: unset;
      display: flex;
      justify-content: start;
      align-content: center;
      vertical-align: middle;
      align-items: center;
    `

    const TextLogo = styled.span`
      font-size: 36px; 
      font-family: 'Amatic SC',serif;
      font-weight: bold;
    `

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

    const MenuItem = styled.div`
      
    `

    const CustomImage = styled.img`
    `


    return (
        <Inner>
        <HeaderWrapper>
            <LogoWrapperLink href='#'>
                <CustomImage
                    width="119px"
                    alt='Vai alla homepage'
                    src={logoGif}
                />
                <TextLogo>Citrus X Lemon</TextLogo>
            </LogoWrapperLink>
            <Menu>
                <MenuItem>
                    Video
                </MenuItem>
                <MenuItem>
                    Mappa
                </MenuItem>
                <MenuItem>
                    Produzione
                </MenuItem>

            </Menu>
        </HeaderWrapper>
        </Inner>
    );
}

export default Header;
