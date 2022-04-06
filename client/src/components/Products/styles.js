import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 300px);
  gap: 1rem;
  padding: 5px;
  justify-content: center;
  padding: 0.5rem;

  @media only screen and (max-width: 1560px) {
    grid-template-columns: repeat(3, 300px);
  }

  @media only screen and (max-width: 962px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media only screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 300px);
  }
`;
