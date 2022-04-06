import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { userRequest } from '../../utils/requestMethods';

import * as S from './styles';

const Success = () => {
  const [orderId, setOrderId] = useState(null);
  const location = useLocation();
  const data = location.state.data;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const response = await userRequest.post('/orders', {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });

        setOrderId(response.data._id);
      } catch (err) {
        console.error(err);
      }
    };

    if (data) return createOrder();
  }, [cart, data, currentUser]);

  return (
    <S.Container>
      {orderId
        ? `Order has been created successfully. Your order number is: ${orderId}.`
        : `Successful! Your order is being prepared...`}
      <S.Button>Back to Homepage</S.Button>
    </S.Container>
  );
};

export default Success;
