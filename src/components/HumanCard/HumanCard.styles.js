import styled from "styled-components";

export const HumanCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  background: #00000095;
  width: 180px;
  padding: 16px;
  z-index: 50;
  border-radius: 10px;
  ${({top}) => top 
  ? `
      bottom: -100px;
      left: -200px;
    `
  : `
      top: -100px;
      right: -100px;
    `
  }
`

export const HumanPicture = styled.div`
  background: url(${({picture}) => picture }) no-repeat;
  background-size: cover;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;

`

export const HumanName = styled.p`
  color: #FFFFFF;
  font-weight: bold;
  margin: 0;
  margin-bottom: 8px;
`

export const HumanCargo = styled.p`
  color: #FFFFFF;
  margin: 0;
`