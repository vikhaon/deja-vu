import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/apiCalls';

import * as S from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    login(dispatch, { username, password });
  };

  return (
    <S.Container>
      <Link to='/'>
        <S.CloseIcon size={24} />
      </Link>
      <S.LeftWrapper>
        <S.Title>SIGN IN</S.Title>
        <S.Form>
          <S.Input placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
          <S.Input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Link>FORGOT YOUR PASSWORD?</S.Link>
          <S.Link>CREATE A NEW ACCOUNT</S.Link>
          <S.BottomWrapper>
            <S.Button onClick={handleLogin} disabled={isFetching}>
              Log in
            </S.Button>
          </S.BottomWrapper>
        </S.Form>
      </S.LeftWrapper>
      <S.RightWrapper />
    </S.Container>
  );
};

export default Login;
