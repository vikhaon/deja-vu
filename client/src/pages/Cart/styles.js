import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  margin: 0px 50px;
  /* ${mobile({ padding: '10px' })} */
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${({ type }) => type === 'filled' && 'none'};
  background-color: ${({ type }) => (type === 'filled' ? 'black' : 'transparent')};
  color: ${({ type }) => type === 'filled' && 'white'};
`;

export const TopTexts = styled.div`
  /* ${mobile({ display: 'none' })} */
`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  /* ${mobile({ flexDirection: 'column' })} */
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  /* ${mobile({ flexDirection: 'column' })} */
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
  padding: 5px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  /* ${mobile({ margin: '5px 15px' })} */
`;

export const ProductPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.bigText};
  font-weight: 200;
  /* ${mobile({ marginBottom: '20px' })} */
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ type }) => type === 'total' && '500'};
  font-size: ${({ type }) => type === 'total' && '24px'};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;

  &:hover {
    cursor: pointer;
    /* transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.tealLight};
    transition: 350ms ease; */
  }
`;
