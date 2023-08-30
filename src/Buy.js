import React from 'react'
import './style.css'
import logo from './images/logo.png'
import menu from './images/menu.png'
import { NavLink } from 'react-router-dom'

const Buy = () => {
  const [menudata,setmenu] = React.useState(false);
  React.useEffect(()=>{
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
      <div className="buy-body">
          <div className="buy-container">
            <div className="navbar buy-nav">
              <img src={logo} alt="logo" className='logo buy-logo'/>
              <nav>
                <ul id='menulist'>
                  <li><NavLink className='link buy-link' to={'/'}>Home</NavLink></li>
                  <li><NavLink className='link buy-link' to={'/Controller'}>Game Controller</NavLink></li>
                  <li><NavLink className='link buy-link' to={'/Buy'}>Buy</NavLink></li>
                </ul>
              </nav>
              <img src={menu} alt="logo" className='menu-icon buy-menu' onClick={togglemenu}/>
            </div>
          </div>

          <form action="https://formsubmit.co/3469harshsharma@gmail.com"target='_blank' className="form" method='POST'>
            <div className="input-here">
              <label htmlFor="Name">Enter Your Name 👤</label>
              <input type="text" name='Name' placeholder='Your Name' required/>
            </div>
            <div className="input-here">
              <label htmlFor="Email">Enter Your Email 📩</label>
              <input type="email" name='Email' placeholder='Your Email' required/>
            </div>
            <div className="input-here">
              <label htmlFor="phone">Enter Your Phone 📱</label>
              <input type="number" name='Phone' placeholder='Your Phone Number' required/>
            </div>
            <div className="input-here">
              <label htmlFor="Order">Give Your Order 🌏</label>
              <textarea name="Order" cols="30" rows="10" placeholder='Your Order Here' required></textarea>
            </div>
            <div className="input-here">
              <button type='submit'>🪬 Order Now 🪬</button>
            </div> 
          </form>

          <div className="buy-footer">
            <h1>📧 Mail Me At | 3469harshsharma@gmail.com</h1>
          </div>
        </div>
    </>
  );
}

export default Buy