import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
import { useLocation } from 'react-router-dom';
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md';

import { publicRequest } from '../../utils/requestMethods';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import * as S from './styles';

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await publicRequest.get(`/products/find/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'decrease') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddProduct = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <S.Container>
      <Navbar />
      <Announcement />
      <S.Wrapper>
        <S.ImgContainer>
          <S.Image src={product.img} />
        </S.ImgContainer>
        <S.InfoContainer>
          <S.Title>{product.title}</S.Title>
          <S.Description>{product.desc}</S.Description>
          <S.Price>$ {product.price}</S.Price>
          <S.FilterContainer>
            <S.Filter>
              <S.FilterTitle>Color</S.FilterTitle>
              {product.color?.map((c) => (
                <S.FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </S.Filter>
            <S.Filter>
              <S.FilterTitle>Size</S.FilterTitle>
              <S.FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <S.FilterSizeOption key={s}>{s}</S.FilterSizeOption>
                ))}
              </S.FilterSize>
            </S.Filter>
          </S.FilterContainer>
          <S.AddContainer>
            <S.AmountContainer>
              <MdRemoveCircle size={24} onClick={() => handleQuantity('decrease')} />
              <S.Amount>{quantity}</S.Amount>
              <MdAddCircle size={24} onClick={() => handleQuantity('increase')} />
            </S.AmountContainer>
            <S.Button onClick={handleAddProduct}>ADD TO CART</S.Button>
          </S.AddContainer>
        </S.InfoContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Product;
