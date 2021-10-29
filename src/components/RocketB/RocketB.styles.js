import styled from "styled-components";
import planets_2 from '../../images/rocket_2.png';

export const RocketB = styled.div`
  cursor: pointer;
`

export const RocketBImg = styled.div`
  background: url(${planets_2}) no-repeat;
  background-size: contain;
  width: 30vw;
  height: 30vw;
  margin: auto;
  position: absolute;
  left: calc(50% + 15vw);
  top: 50%;
  transform: translate(-50%);
  z-index: 2;
`