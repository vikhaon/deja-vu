import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

import {
  Container,
  LinkItems,
  LinksContainer,
  LinksWrapper,
  Wrap,
  LinkTitle,
  Linker,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  WebsiteRights,
  SocialIconLink,
} from './styles';

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>SHOPPING</LinkTitle>
              <Linker to='/'>Women</Linker>
              <Linker to='/'>Men</Linker>
              <Linker to='/'>Baby</Linker>
              <Linker to='/'>Kids</Linker>
            </LinkItems>
          </LinksWrapper>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>CORPORATE</LinkTitle>
              <Linker to='/'>Career at Deja vu</Linker>
              <Linker to='/'>Sustainability</Linker>
              <Linker to='/'>Press</Linker>
              <Linker to='/'>Investor Relations</Linker>
            </LinkItems>
          </LinksWrapper>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>HELP</LinkTitle>
              <Linker to='/'>Customer Service</Linker>
              <Linker to='/'>My Account</Linker>
              <Linker to='/'>Contact</Linker>
              <Linker to='/'>Gift Cards</Linker>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={null}>
              Deja vu
            </SocialLogo>
            <WebsiteRights>
              Deja vu © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='//www.facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='//www.instagram.com'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='//www.youtube.com'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='//www.twitter.com'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='//www.linkedin.com'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrap>
    </Container>
  );
};

export default Footer;
