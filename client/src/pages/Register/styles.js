import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const CloseIcon = styled(MdClose)`
  margin-left: 4rem;
  margin-top: 4rem;
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 85vh;
  padding: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.light};

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.2em;
  color: ${({ theme }) => theme.colors.tealDark};
`;

export const Description = styled.p`
  width: 75%;
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 18px;
  line-height: 1.3em;
  font-weight: 400;
  text-align: left;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 10rem;
`;

export const Input = styled.input`
  position: static;
  display: flex;
  margin-top: 1.25rem;
  padding: 7px 16px;
  justify-content: space-between;
  border: 1px solid #dbdbdb;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.light};
  transition: border 350ms ease, box-shadow 350ms ease, border-radius 300ms ease;
  font-size: 18px;

  &:hover {
    box-shadow: 5px 5px 4px 5px #888888;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    /* border-color: ${({ theme }) => theme.colors.secondary}; */
    transition: 350ms ease;
  }

  &:focus {
    outline: none !important;
  }
`;

export const Agreement = styled.section`
  margin: 15px 0px 15px 0px;
  font-size: 13px;
  line-height: 18px;
`;

export const BottomWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BottomText = styled.p`
  /* width: 50%; */
  font-size: 18px;
  line-height: 23px;
  font-weight: 400;
`;

export const Button = styled.button`
  margin-top: 5px;
  width: 35%;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: 8px 16px;
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
`;

export const RightWrapper = styled.div`
  width: 50%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.light};
  background-image: url('https://bit.ly/3r91qMj');
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 968px) {
    display: none;
  }
`;
