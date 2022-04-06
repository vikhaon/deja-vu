import { MdSend } from 'react-icons/md';
import * as S from './styles';

const Newsletter = () => {
  return (
    <S.Container>
      <S.Title>Join our mailing list</S.Title>
      <S.Description>
        Sign up for our emails including latest trends, fashion & offers.
      </S.Description>
      <S.InputContainer>
        <S.Input placeholder='Your email... ' />
        <S.Button>
          <MdSend />
        </S.Button>
      </S.InputContainer>
    </S.Container>
  );
};

export default Newsletter;
