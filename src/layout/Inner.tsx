import styled from 'styled-components';
import {Viewports} from "../styles";

export const Inner = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  @media (min-width: ${Viewports.tablet}px) {
    margin: auto;
    min-width: 300px;
    max-width: 1350px;
    width: 80%;
  }

  @media (min-width: ${Viewports.desktop}px) {
    max-width: 1200px;
    width: 100%;
  }
`;
