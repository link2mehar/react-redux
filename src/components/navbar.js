import React from "react";
import styled from 'styled-components';
import Shop from './shop';
import Cart from './cart';
import Home from './home';
import TopNav from './topnav';
import Checkout from './checkout';
import Single from './single';
import Admin from './admin'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { connect } from "react-redux";

  const NAV = styled.nav`
    padding: 25px 0px;
    background: #FE7F2D;
  `

  const UL = styled.ul`
  
    list-style: none;
    margin: 0;
    padding: 0;
    display:flex;
    justify-content:center;
  `
  const LI = styled.li`
    margin-right: 10px;
  `
  const A = styled.a`
    color:#fff;
  `
  
   const Navbar = ({cartItemsCount}) => {
     console.log(cartItemsCount.length)
    return (
      
        <div >
          <TopNav>
            <p>top nav</p>
          </TopNav>
          <NAV>
            <div className="container">
              <div className="d-flex">
                <Link to='/'>
                    <div id="logoContainer">
                      <img src="https://gw.alicdn.com/tfs/TB1YLbcRpXXXXXFXFXXXXXXXXXX-310-78.png" aly="logo" />
                    </div>
                </Link>
                <div id="search-container">
                  <input type="text" placeholder="Search.." />
                </div>
                <UL>
                  <LI><Link to="/" style={{color:'#fff'}}>Home</Link></LI>
                  <LI><Link to="/shop" style={{color:'#fff'}}>shop</Link></LI>
                  <LI><Link to="/cart" style={{color:'#fff'}}>Cart<span className="itemsCount">{cartItemsCount.length > 0 ? cartItemsCount.length : ''}</span></Link></LI>
                </UL>
              </div>
            </div>
          </NAV>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Home} />
            
            <Route exact path="/shop" component={Shop} />
           
            <Route exact path="/cart" component={Cart} />
        
            <Route exact path="/checkout" component={Checkout} />
               
            <Route exact path="/product/:id" component={Single} /> 
         
            
          </Switch>
        </div>
     
    );
  }

  const mapStateToProps = state => (

    {cartItemsCount:state.cart}
)

  export default connect(mapStateToProps,null) (Navbar);