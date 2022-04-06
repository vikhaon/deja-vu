import { Link } from 'react-router-dom';
import { MdFavorite, MdSearch, MdShoppingCart } from 'react-icons/md';

import * as S from './styles';

const Product = ({ item }) => {
  return (
    <S.Container>
      <S.Image src={item.img} />
      <S.Info>
        <S.Icon>
          <MdShoppingCart size={24} />
        </S.Icon>
        <S.Icon>
          <Link to={`/product/${item._id}`}>
            <MdSearch size={24} />
          </Link>
        </S.Icon>
        <S.Icon>
          <MdFavorite size={24} />
        </S.Icon>
      </S.Info>
    </S.Container>
  );
};

export default Product;
