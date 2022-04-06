import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requestMethods';

import Product from './Product';
import * as S from './styles';

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category
            ? `${BASE_URL}/products?category=${category}`
            : `${BASE_URL}/api/products`
        );
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    if (category) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => item[key].includes(value))
        )
      );
    }
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === 'ascending') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <S.Container>
      {filteredProducts.map((item, i) => (
        <Product item={item} key={i} />
      ))}
    </S.Container>
    // <S.Container>
    //   {category
    //     ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
    //     : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
    // </S.Container>
  );
};

export default Products;
