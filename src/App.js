import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Footer from './components/Footer';

import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import { useState } from 'react';
import { CartProvider } from './context/CartContext'
import Order from './components/Order';

export default function App() {

  const [color, setColor] = useState('dark');

  return (
    <ChakraProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:category' element={<ItemListContainer />} />
            <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/order' element={<Order/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ChakraProvider>
  );
}
