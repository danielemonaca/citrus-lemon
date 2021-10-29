import {createGlobalStyle} from "styled-components";


export const Viewports = {
    mobile: 375,
    tablet: 768,
    desktop: 1350,
};


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');
  body {
    font-family: 'Amatic SC', cursive;
    color: var(--secondary-color-700);
    font-size: var(--base-font-size);
    font-weight: var(--font-weight-standard);
    transform-origin: top;
    min-height: 100%;
    margin: 0;
    position: relative;
  }

  :root {

    /*************
    *   COLORS   *
    **************/

    --grey: #406671;
    --logo-footer-grey: #4E4F47;
    --yellow: #f1ebe1;
    --text-color: #707070;
    --header-background: #406671;
    --pink: #FD5E8D;

    /*************
    *   VALUES   *
     **************/
    --header-height: 83px;
  }
  
  
  .wrap {
    @media (max-width: ${Viewports.tablet}px) {
      flex-direction: column;
      align-items: center;
    }
  }

`

export default GlobalStyles;
