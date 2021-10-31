import * as S from './Earth.styles'
import logo from '../../images/logoWhite.svg'

export function Earth(){
  return(
    <S.Earth>
      <S.EarthImg>
        <S.Logo alt='' src={logo}/>
        <S.TeamText>Equipe<br></br>Discovery</S.TeamText>
      </S.EarthImg>
    </S.Earth>
  )
}