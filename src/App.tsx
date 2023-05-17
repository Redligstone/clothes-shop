import React from 'react';
import s from './App.module.scss';
import { HashRouter,Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './pages/main/Main';
import Footer from './components/footer/Footer';
import Shop from './pages/shop/Shop';
import OneItem from './pages/oneItem/OneItem';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Cart from './pages/Cart/Cart';
import OrderForm from './pages/OrderForm/OrderForm';
import OrderMade from './pages/OrderMade/OrderMade';

const App:React.FC = () => {
  return (
    <HashRouter>
      <div className={s.main}>
        <div className={s.header}><Header/></div>
        <div className={s.content}>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/shop/:id' element={<OneItem/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/orderForm' element={<OrderForm/>}/>
            <Route path='/orderMade' element={<OrderMade/>}/>
          </Routes>
        </div>
        <div className={s.footer}><Footer/></div>
      </div>
    </HashRouter>
  )
}

export default App   
