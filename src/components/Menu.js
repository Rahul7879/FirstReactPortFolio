import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.png'
import "../App.css"

const Menu = (props) => {
  const [mode, setmode] = useState("dark");


  const changeModes = ()=>{
if(mode === "dark"){
  setmode("light");
  
}else{
  setmode("dark");
 
}
  }
  return (
    <div className='main_nav'>


    <nav className={`navbar navbar-expand-lg navbar-${props.color} bg-${props.color}`}>
  <div className="container-fluid d-flex ">
    <NavLink className="navbar-brand" to="/">
    <img className='logo' src ={logo} alt="" srcset="" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
       
      
      
      </ul>
  
    </div>
    <button onClick={props.changeMode} className='btn btn-outline-secondary'>DarkMode</button>
  </div>
</nav>
    
    
    
    
    </div>
  )
}

export default Menu