import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../../utils/responsive';

export const Container = styled.nav`
  height: 60px;
  font-size: ${({ theme }) => theme.fontSizes.basicText};
  position: sticky;
  ${mobile({ height: '50px' })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .search {
    @media (max-width: 768px) {
      width: 75px;
    }
  }

  @media only screen and (max-width: 475px) {
    display: none;
  }
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  font-size: ${({ theme }) => theme.fontSizes.basicText};
  font-weight: 600;
  width: 225px;
  margin: 0 0 0 2.5%;
  padding: 3.5px 0;
  ${mobile({ width: '50px' })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ alignItems: 'center' })}
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.bigText};
  ${mobile({ fontSize: '16px' })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ justifyContent: 'flex-end' })}
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.basicText};
  cursor: pointer;
  margin-left: ${({ theme }) => theme.margins.sm};
  margin-right: ${({ theme }) => theme.margins.xs};
  position: relative;

  span {
    content: '';
    position: absolute;
    top: -5px;
    bottom: 0;
    right: -10px;
    color: red;
    font-weight: bold;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-left: ${({ theme }) => theme.margins.xs};
    margin-right: ${({ theme }) => theme.margins.xs};
  }
`;

export const MenuItemText = styled.text`
  margin-left: 5px;
  font-size: ${({ theme }) => theme.fontSizes.basicText};
  color: ${({ theme }) => theme.colors.tealLight};

  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

export const Linker = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
`;
