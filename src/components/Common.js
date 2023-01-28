import React from 'react'

const Common = (props) => {
     const data = props.bg;
     console.log(data);
    

  
  return (
    <div>
    <section id="header" className={`d-flex align-items-center color-dark ${props.bg} `}>
    <div className="container-fluid nav_bg">
    <div className="row">
    <div className="col-10 mx-auto">
    <div className="row">
    <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
    <h1 className={`${props.textp}`}>{props.name}<span className='brand_name'> Rahul</span></h1>
    <h2 className={`${props.textp}`}>{props.text}</h2>
    <div className="mt-3">
    <a href="/" className='btnown'>{props.btn}</a>
    </div></div>

    <div className="col-lg-6 order-1 order-lg-2 header-img">
    <img className='img-fluid animated' src={props.img} alt="this is something" />
    </div>
    </div>
    </div></div>
    </div>
    
    </section>
    
    </div>
  )
}

export default Common