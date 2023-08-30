import React, { useEffect } from 'react'
import './style.css'
import logo from './images/logo.png'
import menu from './images/menu.png'
import buy from './images/arrow.png'
import controller from './images/controller.png'
import btn from './images/add.png'
import { NavLink } from 'react-router-dom'

const Home = () => {  
  const [menudata,setmenu] = React.useState(false);
  useEffect(()=>{
    const menulist = document.getElementById('menulist');
    if(menulist)
    {
      menulist.style.maxHeight = menudata ? "130px" : "0px";
    }
  }, [menudata]);

  const togglemenu = ()=>
  {
    setmenu(!menudata);
  }
  return (
    <>
        <div className="home-body">
          <div className="home-container">
            <div className="navbar home-nav">
              <img src={logo} alt="logo" className='logo home-logo'/>
              <nav>
                <ul id='menulist'>
                  <li><NavLink className='link home-link' to={'/'}>Home</NavLink></li>
                  <li><NavLink className='link home-link' to={'/Controller'}>Game Controller</NavLink></li>
                  <li><NavLink className='link home-link' to={'/Buy'}>Buy</NavLink></li>
                </ul>
              </nav>
              <img src={menu} alt="logo" className='menu-icon home-menu' onClick={togglemenu}/>
            </div>

            <div className="row">
              <div className="col-1">
                <h2>PS5 V2 <br /> Dualshock 4</h2>
                <h3>Wireless Controller for PlayStation 5</h3>
                <p>(Compatible / Generic)</p>
                <h4>$42.20</h4>
                <button type='button'><NavLink className='home-btn' to={'/Buy'}>Buy Now <img src={buy} alt="buy" /></NavLink></button>
              </div>
              <div className="col-2">
                <img src={controller} alt="controller" className='controller'/>
                <div className="color-box"></div>
                <div className="add-btn">
                  <img src={btn} alt="btn" />
                  <p><small>Add Cart</small></p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/hvs1234" target='_blank'><i class="fa-brands fa-github"></i></a>
              <a href="https://linkedin.com/in/harshvardhan-sharma-a3685a236" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://www.instagram.com/ha.rshsharma135" target='_blank'><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          <div className="home-footer">
              <h1>©️ Sponsered By | <span>Harshvardhan Sharma</span></h1>
          </div>
        </div>
    </>
  );
}

export default Home