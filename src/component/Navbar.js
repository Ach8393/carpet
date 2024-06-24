import React, { useContext, useState } from 'react';
import './Header.css';
import shopcart from './shopcart.png';
import {ShopContext} from './ShopContext';
import { Link } from 'react-router-dom';


function Navbar() {
	const [menu, setMenu] = useState("shop")
	const {getTotalCartItems} = useContext(ShopContext);
return (
   <div className="sans-serif">
      <div className="cover bg-left bg-center-l">
      <div className="bg-light-red">
	    <nav className="dt w-100 mw8 center"> 
	        <div className="dtc w2 v-mid pa2">
	          <a href="/carpet" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
	            <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
	          </a>
	        </div>
	        <ul className="dtc v-mid tr pa3">
	          <li onClick={()=>{setMenu("electronics")}} className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" ><Link to='/electronics'>Carpet Amazigh</Link></li> 
	          <li onClick={()=>{setMenu("jewelery")}} className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"><Link to='/jewelery'>Traditional Carpet</Link></li>  
	          <li className="f6 fw4 hover-white no-underline white-70 dn dib m12 pv2 ph3">
	            <Link to='/Cart'><img src={shopcart} className='dib w2 h2 br-100' alt='cart icon' /></Link>
	            <div className="nav-cart-count"> {getTotalCartItems()} </div>
	          </li>
	        </ul>
	    </nav>
	  </div>
	  </div>
   </div>
   );
 }
 export default Navbar; 