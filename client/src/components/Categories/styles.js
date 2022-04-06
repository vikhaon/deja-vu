import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 2px;
  width: 96vw;
  margin: auto;

  @media only screen and (max-width: 968px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }
`;
