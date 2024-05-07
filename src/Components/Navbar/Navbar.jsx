import React, {useContext, useState} from 'react'
import './Navbar.css'


import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { FaUser } from 'react-icons/fa';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';


function Navbar() {

    const[menu, setMenu] = useState();
    const { getTotalCartItems } = useContext(ShopContext);

    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleMenuSidebar, setToggleMenuSidebar] = useState(false);


  return (
        <div className='navbar'>
            <Link to='/' style={{textDecoration: 'none', color:'#171717' }}>
                <div className="nav-logo" onClick={()=> {setMenu("shop")}}>
                    <img src={logo} alt="logo" />
                    <p>SHOOPER</p>
                </div>
            </Link>

            <ul className="nav-menu">
                <li onClick={()=> {setMenu("shop")}}> <Link to='/' style={{textDecoration: 'none', color:'#1c1c1c' }}> Shop </Link> {menu ==='shop'? <hr /> : <></>}</li>
                <li onClick={()=> {setMenu("mens")}}> <Link to='/mens' style={{textDecoration: 'none', color:'#1c1c1c' }}> Men </Link> {menu ==='mens'? <hr /> : <></>}</li>
                <li onClick={()=> {setMenu("womens")}}> <Link to='/womens' style={{textDecoration: 'none', color:'#1c1c1c' }}> Women </Link> {menu ==='womens'? <hr /> : <></>}</li>
                <li onClick={()=> {setMenu("kids")}}> <Link to='/kids' style={{textDecoration: 'none', color:'#1c1c1c' }}> Kids </Link> {menu ==='kids'? <hr /> : <></>}</li>
            </ul>

            <div className="nav-login-cart">
                <div className="btn">
                    <Link to='/signup' style={{textDecoration: 'none', color:'#1c1c1c' }}> <button onClick={()=> {setMenu("")}}>Signup</button></Link> 
                    <Link to='/login' style={{textDecoration: 'none', color:'#1c1c1c' }}> <button onClick={()=> {setMenu("")}}>Login</button> </Link>    
                </div>

                <div className="user-dropdown dropdown">
                    {toggleMenu
                    ? <FaUser onClick={() => setToggleMenu(false)} />
                    : <FaUser onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                    <div className="user-dropdown-menu dropdown">
                        <div className="user-dropdown-menu-links dropdown">
                            <Link to='/signup' style={{ textDecoration: 'none', color: '#fff' }}>Signup</Link>
                            <hr />
                            <Link to='/login' style={{ textDecoration: 'none', color: '#fff' }}>Login</Link>
                        </div>
                    </div>
                    )}
                </div>
                <Link to='/cart'> <img src={cart_icon} alt="cart-icon" /> </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>

                <div className="nav-menu-sidebar dropdown">
                    {toggleMenuSidebar
                    ? <RiCloseLine color="#000"  onClick={() => setToggleMenuSidebar(false)} />
                    : <RiMenu3Line color="#000"  onClick={() => setToggleMenuSidebar(true)} />}
                    {toggleMenuSidebar && (
                    <div className="user-menu-sidebar-content dropdown">
                        <ul className="nav-menu-sidebar-links dropdown">
                            <li onClick={()=> {setMenu("shop")}}> <Link to='/' style={{textDecoration: 'none', color:'#fff' }}> Shop </Link> {menu ==='shop'? <hr /> : <></>}</li>
                            <li onClick={()=> {setMenu("mens")}}> <Link to='/mens' style={{textDecoration: 'none', color:'#fff' }}> Men </Link> {menu ==='mens'? <hr /> : <></>}</li>
                            <li onClick={()=> {setMenu("womens")}}> <Link to='/womens' style={{textDecoration: 'none', color:'#fff' }}> Women </Link> {menu ==='womens'? <hr /> : <></>}</li>
                            <li onClick={()=> {setMenu("kids")}}> <Link to='/kids' style={{textDecoration: 'none', color:'#fff' }}> Kids </Link> {menu ==='kids'? <hr /> : <></>}</li>
                        </ul>
                    </div>

                    
                    )}
                </div>

            </div>



        </div>


  )
}

export default Navbar