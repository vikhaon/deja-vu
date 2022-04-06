import { useDispatch, useSelector } from 'react-redux';
import {
  MdAccountCircle,
  MdLogin,
  MdLocalMall,
  MdSearch,
  MdLogout,
} from 'react-icons/md';
import { logout } from '../../redux/userSlice';

import * as S from './styles';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <S.Input placeholder='search...' className='search' />
          <MdSearch style={{ color: 'gray', fontSize: '24' }} />
        </S.Left>
        <S.Linker to='/'>
          <S.Center>
            <S.Logo>Deja vu.</S.Logo>
          </S.Center>
        </S.Linker>
        <S.Right>
          <S.Linker to='/login'>
            <S.MenuItem>
              <MdLogin size={24} />
              <S.MenuItemText>
                {user
                  ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
                  : 'Sign in'}
              </S.MenuItemText>
            </S.MenuItem>
          </S.Linker>
          {!user ? (
            <S.Linker to='/register'>
              <S.MenuItem>
                <MdAccountCircle size={24} />
                <S.MenuItemText>Register</S.MenuItemText>
              </S.MenuItem>
            </S.Linker>
          ) : (
            <S.Linker to='/'>
              <S.MenuItem onClick={handleLogout}>
                <MdLogout size={24} />
                <S.MenuItemText>Logout</S.MenuItemText>
              </S.MenuItem>
            </S.Linker>
          )}
          {/* <S.Linker to='/favorites'>
            <S.MenuItem>
              <FavoriteBorderOutlined />
              <S.MenuItemText>Favorites</S.MenuItemText>
            </S.MenuItem>
          </S.Linker> */}
          <S.Linker to='/cart'>
            <S.MenuItem>
              {quantity !== 0 && <span>{quantity}</span>}
              <MdLocalMall size={24} />
              <S.MenuItemText>Shopping bag</S.MenuItemText>
            </S.MenuItem>
          </S.Linker>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  );
};

export default Navbar;
