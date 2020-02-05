import React from 'react';
import Single from '../single';
import ProductsList from './productsList';
import Cart from '../cart';
import Checkout from '../checkout';
import Login from './Login';
import Register from './Register';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Routes = ()  => {
    return(
        
            <Switch>
             {/* <Route exact path="/" component={Home} />
            
            <Route exact path="/shop" component={Shop} /> */}
        
            <Route exact path="/cart" component={Cart} />
        
            <Route exact path="/checkout" component={Checkout} /> 
            <Route exact path="/" component={ProductsList} />
            <Route exact path="/product/:id" component={Single} /> 
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/register" component={Register} /> 
        
            
        </Switch>
     
    )
}

export default Routes;