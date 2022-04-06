import styled from 'styled-components';

export const Container = styled.div`
  height: 45vh;
  background-color: ${({ theme }) => theme.colors.blueDark};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: ${({ theme }) => theme.margins.xs};
  color: ${({ theme }) => theme.colors.light};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 48px;
  }
`;

export const Description = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.margins.sm};
  color: #e2d4d4df;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

export const InputContainer = styled.div`
  width: 25%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  &:active {
    border-color: none;
  }
`;

export const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;

  &::placeholder {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
