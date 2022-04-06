import * as S from './styles';
import { categoriesPortrait, categoriesLandscape } from '../../data';
import CategoryItemLandscape from './CategoryItemLandscape';
import CategoryItemPortrait from './CategoryItemPortrait';

const Categories = () => {
  return (
    <>
      <S.Container>
        {categoriesLandscape.map((item) => (
          <CategoryItemLandscape item={item} key={item.id} />
        ))}
      </S.Container>
      <S.Container>
        {categoriesPortrait.map((item) => (
          <CategoryItemPortrait item={item} key={item.id} />
        ))}
      </S.Container>
    </>
  );
};

export default Categories;
