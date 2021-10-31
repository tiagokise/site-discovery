import { useState } from 'react/cjs/react.development';
import { HumanCard } from '../HumanCard/HumanCard';
import * as S from './RocketA.styles'
import vanessa from '../../images/vanessa.jpeg';

const humanA = {
  name: 'Vanessa Ferreira',
  cargo: 'Frontend Developer',
  picture: vanessa
}

export function RocketA(){
  const [rocketAIsOpen, setRocketAIsOpen] = useState(false);
  
  const toggleRockeAButton = (e) => {
    setRocketAIsOpen(!rocketAIsOpen);
  };

  return(
    <S.RocketA onClick={toggleRockeAButton}>
      <S.RocketAImg>
        {rocketAIsOpen && <HumanCard top name={humanA.name} cargo={humanA.cargo} picture={humanA.picture} rocketAIsOpen={rocketAIsOpen}/> }
      </S.RocketAImg>
    </S.RocketA>

  )
}