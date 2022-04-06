import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/apiCalls';
import * as S from './styles';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else register(dispatch, { username, password, email });
    window.location.href = '/';
  };

  return (
    <S.Container>
      <Link to='/'>
        <S.CloseIcon size={24} />
      </Link>
      <S.LeftWrapper>
        <S.Title>REGISTER AN ACCOUNT</S.Title>
        <S.Description>
          Start by registering your account. Once your account is verified, you will get
          access to all the features on the website. Then you will be able to customize
          your profile and save any product into your favourites.
        </S.Description>

        <S.Form onSubmit={handleRegister}>
          <S.Input
            placeholder='Username'
            type='name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <S.Input
            placeholder='E-Mail'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Input
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Input
            placeholder='Confirm password'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {message && <h4 style={{ color: 'red' }}>{message}</h4>}
          <S.Agreement>
            By creating an account, I consent to the processing of my personal data in
            accordance with the <b>PRIVACY POLICY</b>
          </S.Agreement>
          <S.BottomWrapper>
            <S.BottomText>
              <b>20% off</b> on the first purchase.
            </S.BottomText>
            <S.Button type='submit'>Register</S.Button>
          </S.BottomWrapper>
        </S.Form>
      </S.LeftWrapper>
      <S.RightWrapper />
    </S.Container>
  );
};

export default Register;
