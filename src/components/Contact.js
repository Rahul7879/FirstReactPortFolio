import React, {useState} from 'react'

const Contact = () => {
  const [data, setdata] = useState({
    fullName: "",
    phone: "",
    email: "",
    msg: ""
  })
  const inputEvent = (event) =>{
    const {name,value} = event.target;
  

    setdata((preVal) =>{
      return {
        ...preVal,
        [name] : value,

      };
    });
  }
  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`Hell ${data.fullName} your Mobile is +91${data.phone} and Email-${data.email}`)

  }
  return (
    <>
    <div className="my-5">
    <h1 className="text-center">Contact Us</h1></div>
    <div className="container contact_div">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form  onSubmit={formSubmit}>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input name='fullName' value={data.fullName} onChange={inputEvent} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label">Phone Number</label>
  <input name='phone' value={data.phone} onChange={inputEvent} type="text" class="form-control" id="exampleFormControlInput2" placeholder="Phone Number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput3" class="form-label">Email address</label>
  <input name='email' value={data.email} onChange={inputEvent} type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea name='msg' value={data.msg} onChange={inputEvent} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
<button className="btn btn-outline-primary" type='submit'>Submit</button></div>
    </form>
    
    </div></div></div>
    </>
  )
}

export default Contact