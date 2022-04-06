import * as S from './styles';
import Button from '../../Button';
import { Link } from 'react-router-dom';

const CategoryItemLandscape = ({ item }) => {
  return (
    <S.Container>
      <S.Image src={item.img} />
      <S.Info>
        <S.Title>{item.title}</S.Title>
        <S.Description>{item.description}</S.Description>
        <Button secondary>
          <Link to='/products/women'>SHOP NOW</Link>
        </Button>
      </S.Info>
    </S.Container>
  );
};

export default CategoryItemLandscape;
