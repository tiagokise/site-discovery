import React from 'react';
import * as S from './HumanCard.styles';

export function HumanCard({name, picture, cargo, rocketAIsOpen, top}){
  
  return(
   <S.HumanCard rocketAIsOpen={rocketAIsOpen} top={top}>
     <S.HumanPicture picture={picture}/>
     <S.HumanName>{name}</S.HumanName>
     <S.HumanCargo>{cargo}</S.HumanCargo>
   </S.HumanCard>
  )
}