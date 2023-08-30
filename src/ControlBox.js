import React from 'react'
import { NavLink } from 'react-router-dom'

const ControlBox = ({boxdata}) => {
  return (
    <>
        <div className="controller-box">
            {boxdata.map((curele)=>{
                return (
                    <div className="controller-boxes" key={curele.id}>
                        <img src={curele.image} alt="ps1"/>
                        <h1>{curele.title}</h1>
                        <h3>{curele.price}</h3>
                        <button><NavLink className='controller-btn' to={'/Buy'}>{curele.btn}</NavLink></button>
                    </div>
                );
            })}    
        </div>

        <div className="controller-footer">
            <h1>🪪 Hvs Gaming Store | All Right Reserved</h1>
        </div>
    </>
  )
}

export default ControlBox