import Axios from 'axios';
import React, { useState,useEffect} from 'react';
import SingleContact from "./SingleContact";
import { useHistory,useParams} from "react-router-dom";




const Contact = () => {
      let history = useHistory();
      

      const [users, setUser] = useState([]);

      useEffect(() => {
            Axios.get("/contact")
                  .then(res => {
                        setUser(res.data.contacts);
                  })
            .catch(error => { console.log(error)})
      }, [])
      

      const deleteContact = async (id) => {
            
            const res = await Axios.delete(`/contact/${id}`);
            console.log(`/contact/${id}`);
            if (res.data.status === 200)
            {
                  history.push("/");
                  }
            

      }
     
    return (
       
          <>
                
                <div className="container">
                      <h1 className="mt-5">All Users</h1>
                      <div className="">
                        
                      {users.map((contact) => (
                        <SingleContact key={contact.id} deleteContact={deleteContact} id={contact.id} fname={contact.fullName} email={contact.email} phone={contact.phone} />))
                  }
                      </div>
                  </div>
           </>
       
    );
}

export default Contact;

