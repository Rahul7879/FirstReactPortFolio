import React, {useState} from 'react'
import Home from './components/Home'
import { Route, Routes} from "react-router-dom"
import Service from './components/Service'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Footer from './components/Footer'





const App = () => {
  const [bg, setbg] = useState("light");
  const [text, setText] = useState("textDark");
  const changeMode = () =>{
    if(bg === "dark"){
      setbg("light");
      setText("textDark");
    }else{
      setbg("dark");
      setText("text");
    }
    console.log("clicked");

  }
  return (
    <>
    <Menu color = {bg} changeMode = {changeMode}/>
    <Routes>
    <Route path = "/" element = {<Home text = {text} bg = {bg} />}/>
    <Route path = "/about" element = {<About/>}/>
    <Route path = "/service" element = {<Service/>}/>
    <Route path = "/contact" element = {<Contact/>}/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App