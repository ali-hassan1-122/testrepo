import React, { useState,useEffect } from "react";
import Axios from "axios";
import { useHistory,useParams} from "react-router-dom";

const EditContact = () => {
  let history = useHistory();
  const { id } = useParams();
  
  const [data, setData] = useState([
    {
      fullName: "",
      email: "",
      phone: "",
    }
  ]);
  useEffect(() => {
    LoadContact();
  }, [])

  const LoadContact = async () => {
    const res = await Axios.get(`/contact/${id}/edit`);
    setData(res.data.contact);
  }

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
     
    });
  };

  const UpdateContact = async (e) => {
    e.preventDefault();
        const res = await Axios.patch(`/contact/${id}`, data);
    if(res.data.status === 200)
    {
      history.push("/contact");
    }
  }
  return (
    <>
    <div className="my-5">
          <h1 className="text-center">Update Contact</h1>
    </div>
    <div className="container contact_div" >
      <div className="row">
        <div className="col-md-6 col-10 mx-auto" >
                                <form onSubmit={UpdateContact}>
                                      
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" required name="fullName" value={data.fullName} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your FullName" />
            </div>
            
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" required name="email" value={data.email} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
            </div>
            
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="text" name="phone" value={data.phone} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phoen" />
            </div>
           
              <div className="col-12">
              <button className="btn btn-primary" type="submit">Update</button>
              </div>
          </form>
        </div>
      </div>
    </div>
</>
  );
}

export default EditContact;
