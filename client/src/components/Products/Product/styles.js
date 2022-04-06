import styled from 'styled-components';

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  width: 300px;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    /* background-color: #e9f5f5; */
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.1);
  }
`;
