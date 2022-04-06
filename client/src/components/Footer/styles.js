import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.colorGradient};
`;

export const Wrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }

  @media screen and (max-width: 692px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${({ theme }) => theme.margins.sm};
  color: ${({ theme }) => theme.colors.light};

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const LinkTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
`;

export const Linker = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    margin-bottom: 1rem;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;

  @media screen and (max-width: 820px) {
    margin-bottom: 1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (max-width: 820px) {
    margin-top: 1rem;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transition: 0.3s ease-out;
  }
`;
