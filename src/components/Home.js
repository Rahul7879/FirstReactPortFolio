import React from 'react'
import "../App.css"
import img from "../components/img2.png"
import Common from './Common'

const Home = (props) => {
  return (
    <>
 <div className={`bg-${props.bg}`}>
 <Common name = "Grow Your Bussiness With"
 text = "We are Experienced Developer "
 btn = 'Get Started'
 img = {img}
 textp = {props.text}
//  bg = {props.bg}
 />
 </div>
    
    
    </>
  )
}

export default Home