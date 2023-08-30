import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.png'
import menu from './images/menu.png'
import ControlBox from './ControlBox'
import Menu from './API'
import './style.css'

const Controller = () => {
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

  const [boxdata] = React.useState(Menu);
  return (
    <>
        <div className="controller-body">
          <div className="controller-container">
            <div className="navbar controller-nav">
              <img src={logo} alt="logo" className='logo controller-logo'/>
              <nav>
                <ul id='menulist'>
                  <li><NavLink className='link controller-link' to={'/'}>Home</NavLink></li>
                  <li><NavLink className='link controller-link' to={'/Controller'}>Game Controller</NavLink></li>
                  <li><NavLink className='link controller-link' to={'/Buy'}>Buy</NavLink></li>
                </ul>
              </nav>
              <img src={menu} alt="logo" className='menu-icon controller-menu' onClick={togglemenu}/>
            </div>
          </div>

          <ControlBox boxdata = {boxdata} />
        </div>
    </>
  )
}

export default Controller