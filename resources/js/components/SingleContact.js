import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

function SingleContact(props) {
      const delcontact = (id) => {
            props.deleteContact(id);
      }
      return (
            <>
                  <div className="card mb-3">
                        <div className="card-body">
                              <div className="row">
                                    <div className="col-md-2">
                                          <span className="img">{props.fname[0] }</span>
                                    </div>
                                     <div className="col-md-2">
                                          <span>{props.fname }</span>
                                    </div>
                                     <div className="col-md-4">
                                          <span>{props.email }</span>
                                    </div>
                                     <div className="col-md-2">
                                          <span>{props.phone }</span>
                                    </div>

                                    <div className="col-md-2">


                                          <span><Link className="btn-sm btn-success" to={`/contact/edit/${props.id}`}>Edit</Link> | <button className="btn-sm btn-danger" onClick={()=> delcontact(props.id)}>Delete</button></span>
                                    </div>

                                     
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default SingleContact;