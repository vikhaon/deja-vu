import * as S from './styles';
import Button from '../../Button';
import { Link } from 'react-router-dom';

const CategoryItemPortrait = ({ item }) => {
  return (
    <S.Container>
      <Link to={`/products/${item.category}`}>
        <S.Image src={item.img} />
        <S.Info>
          <S.Title>{item.title}</S.Title>
          <Button>Shop now</Button>
        </S.Info>
      </Link>
    </S.Container>
  );
};

export default CategoryItemPortrait;
