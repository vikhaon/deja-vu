import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  padding: 8px;
  font-size: ${({ theme }) => theme.fontSizes.bigSubText};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};

  ${({ secondary }) =>
    secondary &&
    css`
      padding: 15px;
      /* background-color: ${({ theme }) => theme.colors.light};
      color: ${({ theme }) => theme.colors.dark}; */
    `};
`;
