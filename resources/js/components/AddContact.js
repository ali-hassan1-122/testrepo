import React, { useState } from "react";
import Axios from "axios";
import { useHistory} from "react-router-dom";


const AddContact = () => {
  let history = useHistory();
  const headers = {
  Accept: "application/json", "Content-Type": "multipart/form-data; boundary=---------------------------974767299852498929531610575",
}
  const [data, setData] = useState([
    {
      fullname: "",
      email: "",
      phone: "",
      image:"",
    }
  ]);

  const InputEvent = (event) => {
    // console.log(event.target.files);
    // const image = event.target.files[0];
    const { name, value } = event.target;
    const image = event.target.files;
       
  
    // setData({ image: event.target.files });
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
        image:image,
      };
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
 
      // console.log(data.image);
    const res = await Axios.post('/contact', data, { headers:headers });
    console.log(res);
    if(res.data.status === 200)
    {
      history.push("/contact");
      
    }
  }
  return (
    <>
    <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div" >
      <div className="row">
        <div className="col-md-6 col-10 mx-auto" >
                                <form onSubmit={formSubmit}>
                                      
            <div className="mb-3">
                <label  className="form-label">Full Name</label>
                <input type="text" required name="fullname" value={data.fullname ?? ''} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your FullName" />
            </div>
            
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" required name="email" value={data.email ?? ''} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
            </div>
            
            <div className="mb-3">
                <label  className="form-label">Phone</label>
                <input type="text" required name="phone" value={data.phone ?? ''} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phoen" />
            </div>

              <div className="mb-3">
                <label  className="form-label">Select Image : </label>
                <input type="file"   name="image"  onChange={InputEvent} />
            </div>
           
              <div className="col-12">
              <button className="btn btn-primary" type="submit">Submit form</button>
              </div>
          </form>
        </div>
      </div>
    </div>
</>
  );
}

export default AddContact;
