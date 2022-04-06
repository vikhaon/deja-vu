import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

export const Container = styled.section`
  height: 100vh;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.margins.sm};
  color: ${({ theme }) => theme.colors.tealLight};
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: ${({ theme }) => theme.margins.sm};
`;

export const FilterText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.bigSubText};
  font-weight: 600;
  margin-right: ${({ theme }) => theme.margins.xs};
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;

export const Option = styled.option`
  font-size: ${({ theme }) => theme.fontSizes.basicText};
`;
