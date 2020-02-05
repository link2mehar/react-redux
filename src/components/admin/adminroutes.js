import React from 'react';
import AddProduct from './addProduct';
import AllProducts from './productList';
import Settings from './settings';
import Smtp from './smtp';
import Addcategory from './addCategory';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Dashboard from './dasboard';
const adminRoutes = () => {


    return(
        <Switch>
            <Route exact path="/dashboard" component={Dashboard} /> 
            <Route exact path="/addproduct" component={AddProduct} /> 
            <Route exact path="/allproducts" component={AllProducts} /> 
            <Route exact path="/settings" component={Settings} /> 
            <Route exact path="/addcategory" component={Addcategory} /> 
            <Route exact path="/smtp" component={Smtp} /> 
            
            
        </Switch>
    )


}
export default adminRoutes;
