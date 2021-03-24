import React from 'react';
import { Route, Switch } from 'react-router';
import AddContact from './AddContact';
import Contact from './Contact';
import Home from './Home';
import Navbar from "./Navbar";
import EditContact from "./EditContact";
import "./app.css";


function Index() {
    return (
       
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home}/>
                <Route exact path="/addcontact" component={AddContact} />
                <Route exact path="/contact" component={Contact} />
                <Route exect path="/contact/edit/:id" component={EditContact} />
            </Switch>
         
        </>
          
       
    );
}

export default Index;


