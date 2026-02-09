import React, { useState, useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const current = window.location.pathname.substring(1);
  const [menu, setMenu] = useState(current || "Shop"); 
  const [isOpen, setIsOpen] = useState(false); // hamburger toggle
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" style={{ width: "80px", height: "auto" }}/>
        <p>UC</p>
      </div>

      {/* Hamburger */}
      <div className="nav-hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li onClick={()=>setMenu("Shop")}><Link to="/">Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Iphones")}><Link to="/Iphones">Iphone</Link>{menu==="Iphones"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Samsungs")}><Link to="/Samsungs">Samsung</Link>{menu==="Samsungs"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Laptops")}><Link to="/Laptops">Laptop</Link>{menu==="Laptops"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Accessories")}><Link to="/Accessories">Accessories</Link>{menu==="Accessories"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Others")}><Link to="/Others">Others</Link>{menu==="Others"?<hr/>:<></>}</li>
      </ul>   

      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" style={{ width: "40px", height: "auto" }}/></Link>
        <div className="nav-cart-count">{getTotalCartItems(0)}</div>
      </div>
    </div>
  )
}

export default Navbar;
