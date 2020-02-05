import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Checkout = ({cartItems}) => {

    const SendMail = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:9000/api/ordermail', {
                to: 'rohiarora001@gmail.com'
              })
           if(res){}
          } catch (error) {
            console.error(error)
          }
    }
    return (
        
            <div class="container">
                    <Helmet>
                        <title>Checkout</title>
                        <meta name="description" content="This is a different description for this route." />
                    </Helmet>
                <div className="d-flex">
                <form action="" style={{width:'80%'}}>
                    <div class="row">
                        <h1>Checkout</h1>
                        <div>
                            <h3>Billing Address</h3>
                            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                            <label for="email"><i class="fa fa-envelope"></i> Email</label>
                            <input type="text" id="email" name="email" placeholder="john@example.com" />
                            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                            <label for="city"><i class="fa fa-institution"></i> City</label>
                            <input type="text" id="city" name="city" placeholder="New York" />

                            <div class="row">
                                <div >
                                    <label for="state">State</label>
                                    <input type="text" id="state" name="state" placeholder="NY" />
                                </div>
                                <div >
                                    <label for="zip">Zip</label>
                                    <input type="text" id="zip" name="zip" placeholder="10001" />
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <label>
                    <input type="checkbox"  name="sameadr" /> Shipping address same as billing
                    </label> */}
                    <input type="submit" value="Pay Now" onClick={SendMail} class="checkoutBtn" />
                </form>
            
        
        
                <div >
                    <h4>Cart
                        <span class="price" >
                        <i class="fa fa-shopping-cart"></i>
                        <b>4</b>
                        </span>
                    </h4>
                    {cartItems.map((product)=> ( 
                        <p><a href="#">{product.title}</a> <span class="price">${product.price}</span></p>
                    )) }
                    
                    
                    <hr />
                    <p>Total <span class="price" ><b>$30</b></span></p>
                </div>
                </div>
            </div>
           
        
    )

}
const mapStateToProps = state => ({
    cartItems: state.cart
})
const mapDispatchToProps = dispatch => ({
    paypal: () => console.log('paypal') 
})

export default connect(mapStateToProps,mapDispatchToProps)( Checkout);