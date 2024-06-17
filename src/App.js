import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Shop from './component/Shop';
import Product from './component/Product';
import ProductCard from './component/ProductCard';
import NewArrivals from './component/NewArrivals';
import About from './component/About';
import Blog from './component/Blog';
import Cart from './component/Cart';
import Collections from './component/Collections';
import Navbar from './component/Navbar';
import Footer from './component/Footer';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ='/carpet' element={<Shop/>} />
        <Route path ='carpet/Collections' element={<Collections/>} />
        <Route path ='/carpet/NewArrivals' element={<NewArrivals/>} />
        <Route path ='/carpet/Blog' element={<Blog/>} />
        <Route path ='/carpet/carpet/About' element={<About/>} />
        <Route path ='/carpet/ProductCard' element={<ProductCard />} >
          <Route path=':productId' element={<ProductCard />} />
        </Route>
        <Route path ='/carpet/Cart' element={<Cart/>} />
        <Route path ='/carpet/Product' element={<Product />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;