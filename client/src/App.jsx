import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Success from './pages/Success';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:category' element={<ProductList />} />
      </Routes>
      <Routes>
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      <Routes>
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Routes>
        <Route path='/success' element={<Success />} />
      </Routes>
      <Routes>
        <Route path='/login' element={user ? <Navigate replace to='/' /> : <Login />} />
      </Routes>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
