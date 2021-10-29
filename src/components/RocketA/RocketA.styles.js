import styled from "styled-components";
import planets_1 from '../../images/rocket_1.png';

export const RocketA = styled.div`
  cursor: pointer;
`
export const RocketAImg = styled.div`
  background: url(${planets_1}) no-repeat;
  background-size: contain;
  width: 30vw;
  height: 30vw;
  margin: auto;
  position: absolute;
  left: calc(50% - 10vw);
  bottom: 50%;
  transform: translate(-50%);
  z-index: 2;
`