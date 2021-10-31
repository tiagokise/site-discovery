import React from 'react';
import { useState } from 'react/cjs/react.development';
import { HumanCard } from '../HumanCard';
import * as S from './RocketB.styles'
import pedro from '../../images/pedro.jpeg'

const humanB = {
  name: 'Pedro Raimondi',
  cargo: 'Tech Lead',
  picture: pedro
}
export const RocketB = () => {
  const [rocketBIsOpen, setRocketBIsOpen] = useState(false);
  
  const toggleRockeBButton = (e) => {
    setRocketBIsOpen(!rocketBIsOpen);
  };

  return(
    <S.RocketB onClick={toggleRockeBButton}>
      <S.RocketBImg>
      {rocketBIsOpen && <HumanCard top={false} name={humanB.name} cargo={humanB.cargo} picture={humanB.picture} rocketBIsOpen={rocketBIsOpen}/> }
      </S.RocketBImg>
    </S.RocketB>
  )
}