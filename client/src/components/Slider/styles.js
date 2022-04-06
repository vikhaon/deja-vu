import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 95vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  margin: auto;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
`;

export const Slide = styled.div`
  margin-top: 1rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

export const ImageContainer = styled.div`
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;

  @media only screen and (max-width: 1337px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 962px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  height: 63%;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  position: absolute;
  top: 60%;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  opacity: 0.75;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.bigText};
  text-align: center;
  color: ${({ theme }) => theme.colors.light};

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.light};
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  margin: 20px 10px;
  font-size: ${({ theme }) => theme.fontSizes.bigSubText};
  font-weight: 500;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.light};
`;

export const Arrow = styled.div`
  width: 55px;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 5%;
  left: ${({ direction }) => direction === 'left' && '4%'};
  right: ${({ direction }) => direction === 'right' && '4%'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  &:hover {
    opacity: 1;
  }
`;
