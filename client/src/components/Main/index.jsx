import Categories from '../Categories';
import Slider from '../Slider';
import * as S from './styles';

const Main = () => {
  return (
    <S.MainContainer>
      <Slider />
      <Categories />
    </S.MainContainer>
  );
};

export default Main;
