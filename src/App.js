import * as S from './App.styles'
import Earth from './components/Earth/Earth';
import RocketA from './components/RocketA/RocketA';
import RocketB from './components/RocketB/RocketB';


export default function App() {


  return (
    <S.App >
      <RocketA/>
      <RocketB/>
      <Earth/>
    </S.App>
  );
}
