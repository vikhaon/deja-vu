import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

import { removeProduct } from '../../redux/cartSlice';
import { userRequest } from '../../utils/requestMethods';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import * as S from './styles';

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeProduct(cart.products[0]._id));
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate('/success', { state: { data: response.data, products: cart } });
      } catch (err) {}
    };

    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, navigate, cart]);

  return (
    <S.Container>
      <Navbar />
      <Announcement />
      <S.Wrapper>
        <S.Title>YOUR BAG</S.Title>
        <S.Top>
          <S.TopButton>
            <Link to='/products/men'>Continue Shopping</Link>
          </S.TopButton>
          <S.TopTexts>
            <S.TopText>Shopping Bag({quantity})</S.TopText>
            <S.TopText>Your Wishlist (0)</S.TopText>
          </S.TopTexts>
          <S.TopButton type='filled'>
            <Link to='/products/men'>MEN</Link>
          </S.TopButton>
          <S.TopButton type='filled'>
            <Link to='/products/women'>WOMEN</Link>
          </S.TopButton>
        </S.Top>
        <S.Bottom>
          <S.Info>
            {cart.products.map((product, i) => (
              <S.Product key={i}>
                <S.ProductDetail>
                  <S.Image src={product.img} />
                  <S.Details>
                    <S.ProductName>
                      <b>Product:</b> {product.title}
                    </S.ProductName>
                    <S.ProductId>
                      <b>ID:</b> {product._id}
                    </S.ProductId>
                    <S.ProductColor color={product.color} />
                    <S.ProductSize>
                      <b>Size:</b> {product.size}
                    </S.ProductSize>
                  </S.Details>
                </S.ProductDetail>
                <S.PriceDetail>
                  <S.ProductAmountContainer>
                    {/* <MdAddCircle /> */}
                    <S.ProductAmount>{product.quantity}</S.ProductAmount>
                    <MdClose
                      onClick={handleRemoveProduct}
                      style={{
                        marginLeft: '5px',
                        color: 'red',
                        fontSize: '2rem',
                        cursor: 'pointer',
                      }}
                    />
                    {/* <MdRemoveCircle onClick={handleRemoveProduct} /> */}
                  </S.ProductAmountContainer>
                  <S.ProductPrice>${product.price * product.quantity}</S.ProductPrice>
                </S.PriceDetail>
              </S.Product>
            ))}
            <S.Hr />
          </S.Info>
          <S.Summary>
            <S.SummaryTitle>ORDER SUMMARY</S.SummaryTitle>
            <S.SummaryItem>
              <S.SummaryItemText>Subtotal</S.SummaryItemText>
              <S.SummaryItemPrice>${cart.total || null}</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText>Estimated Shipping</S.SummaryItemText>
              <S.SummaryItemPrice>$5.90</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText>Shipping Discount</S.SummaryItemText>
              <S.SummaryItemPrice>-$5.90</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem type='total'>
              <S.SummaryItemText>Total</S.SummaryItemText>
              <S.SummaryItemPrice>${cart.total || null}</S.SummaryItemPrice>
            </S.SummaryItem>
            <StripeCheckout
              name='Deja Vu'
              image=''
              billingAddress
              shippingAddress
              description={`Your total is $ ${cart.total}.`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <S.Button>CHECKOUT NOW</S.Button>
            </StripeCheckout>
          </S.Summary>
        </S.Bottom>
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Cart;
