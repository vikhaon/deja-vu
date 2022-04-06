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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  letter-spacing: 1px;
  padding: 3rem;

  @media only screen and (max-width: 968px) {
    padding: 0.5rem;
  }
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 10px;

  @media only screen and (max-width: 968px) {
    font-size: ${({ theme }) => theme.fontSizes.bigText};
  }

  @media only screen and (max-width: 568px) {
    font-size: ${({ theme }) => theme.fontSizes.bigSubText};
  }
`;

export const Description = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.bigSubText};
  opacity: 0.7;
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};

  @media only screen and (max-width: 968px) {
    display: none;
  }
`;
