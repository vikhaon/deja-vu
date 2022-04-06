import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const CloseIcon = styled(MdClose)`
  margin-left: 5rem;
  margin-top: 6rem;
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  display: flex;
  width: 43%;
  height: 70vh;
  padding: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.light};

  @media only screen and (max-width: 968px) {
    width: 100%;
    padding: 5rem;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 1.25rem;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.2em;
  color: ${({ theme }) => theme.colors.tealDark};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 5rem;
`;

export const Input = styled.input`
  position: static;
  display: flex;
  margin-bottom: 1.25rem;
  padding: 7px 16px;
  justify-content: space-between;
  border: 1px solid #dbdbdb;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.light};
  transition: border 350ms ease, box-shadow 350ms ease, border-radius 300ms ease;
  font-size: 18px;

  &:hover,
  :focus {
    box-shadow: 5px 5px 4px 5px #888888;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    /* border-color: ${({ theme }) => theme.colors.secondary}; */
    transition: 350ms ease;
  }

  &:focus {
    outline: none !important;
  }
`;

export const Link = styled.a`
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
`;

export const BottomWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 1rem; */
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1.25rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.tealDark};
  color: ${({ theme }) => theme.colors.light};
  cursor: pointer;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.basicText};

  &:hover {
    background-color: ${({ theme }) => theme.colors.tealLight};
    box-shadow: 0 1px 9px 4px rgb(0 0 0 / 10%);
    transition: 550ms ease;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.tealLight};
  }
`;

export const Error = styled.span`
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const RightWrapper = styled.div`
  width: 50%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.light};
  background-image: url('https://bit.ly/3s3OlmH');
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 968px) {
    display: none;
  }
`;
