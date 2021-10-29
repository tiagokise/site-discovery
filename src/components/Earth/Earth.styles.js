import styled from "styled-components";
import earth from '../../images/earth.png';
import planets_1 from '../../images/planets_1.png';
import planets_2 from '../../images/planets_2.png';

export const Earth = styled.div`
  height: 100vh;
  display: flex;
`
export const EarthImg = styled.div`
  background: url(${earth}) no-repeat;
  background-size: contain;
  width: 30vw;
  height: 30vw;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ::before{
    content: '';
    background: url(${planets_1}) no-repeat;
    background-size: contain;
    width: 100vw;
    height: 40vw;
    position: absolute;
    top: -15vw;
    left: 50%;
    transform: translateX(-50%);
  }
  
  ::after{
    content: '';
    background: url(${planets_2}) no-repeat;
    background-size: contain;
    width: 100vw;
    height: 40vw;
    position: absolute;
    bottom: -15vw;
    left: 50%;
    transform: translateX(-50%);
  }

`

export const Logo = styled.img`
  z-index: 3;
  width: 20vw;
  height: 5vw;
  position: absolute;
  top: calc(20%);
  left: 50%;
  transform: translate(-50%);
  background: #00000080;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

export const TeamText = styled.h1`
  text-align: center;
  font-size: 3.5vw;
`