import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Shop from './component/Shop';
import Product from './component/Product';
import TissuCategory from './component/TissuCategory';
import ProductCard from './component/ProductCard';
import Cart from './component/Cart';
import Navbar from './component/Navbar';
import Footer from './component/Footer';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ='/carpet' element={<Shop/>} />
        <Route path ='/electronics' element={<TissuCategory category ="electronics" />} />
        <Route path ='/jewelery' element={<TissuCategory category ="jewelery"  />} />
        <Route path ='/Blog' element={< TissuCategory category ="blog" />} />
        <Route path ='/About' element={< TissuCategory category ="about" />} />
        <Route path ='/ProductCard' element={<ProductCard />} >
          <Route path=':productId' element={<ProductCard />} />
        </Route>
        <Route path ='/Cart' element={<Cart/>} />
        <Route path ='/Product' element={<Product />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;