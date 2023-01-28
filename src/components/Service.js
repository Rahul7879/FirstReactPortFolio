import React from 'react'
import Cart from './Cart'
import Sdata from "./ServiceData"

const Service = () => {
  return (
    <div>
    <div className="my-5">
    <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
    <div className="row">
    <div className="col-10 mx-auto">
    <div className="row gy-4">
  {
    Sdata.map((val,ind) =>{
      return <Cart key = {ind}
      imgsrc = {val.imgsrc} title = {val.title}
      />
    })
  }

    </div>
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default Service