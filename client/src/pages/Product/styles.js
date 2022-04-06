import styled from 'styled-components';

export const Container = styled.section``;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.bigText};
`;

export const Description = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.span`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.bigText};
`;

export const FilterContainer = styled.section`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export const FilterTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.bigSubText};
  font-weight: 400;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: 0px 3px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;

export const Button = styled.button`
  display: flex;
  padding: 8px;
  font-size: ${({ theme }) => theme.fontSizes.bigSubText};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;
