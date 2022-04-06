import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export const Info = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

export const Title = styled.h1`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.margins.xs};
`;
