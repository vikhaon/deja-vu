import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import * as S from './styles';

const ProductsList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <S.Container>
      <Navbar />
      <Announcement />
      <S.Title>{category.toUpperCase()}</S.Title>
      <S.FilterContainer>
        <S.Filter>
          <S.FilterText>Filter Products:</S.FilterText>
          <S.Select name='color' onChange={handleFilters}>
            <S.Option disabled>Color</S.Option>
            <S.Option>Black</S.Option>
            <S.Option>White</S.Option>
            <S.Option>Gray</S.Option>
            <S.Option>Red</S.Option>
            <S.Option>Green</S.Option>
            <S.Option>Blue</S.Option>
            <S.Option>Orange</S.Option>
            <S.Option>Brown</S.Option>
          </S.Select>
          <S.Select name='size' onChange={handleFilters}>
            <S.Option disabled>Size</S.Option>
            <S.Option>XS</S.Option>
            <S.Option>S</S.Option>
            <S.Option>M</S.Option>
            <S.Option>L</S.Option>
            <S.Option>XL</S.Option>
          </S.Select>
        </S.Filter>
        <S.Filter>
          <S.FilterText>Sort Products:</S.FilterText>
          <S.Select onChange={(e) => setSort(e.target.value)}>
            <S.Option value='newest'>Newest</S.Option>
            <S.Option value='ascending'>Price (ascending)</S.Option>
            <S.Option value='descending'>Price (descending)</S.Option>
          </S.Select>
        </S.Filter>
      </S.FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
    </S.Container>
  );
};

export default ProductsList;
