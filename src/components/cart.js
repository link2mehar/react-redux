import React from 'react'
import { connect } from 'react-redux';
import {removeFromCart} from '../store';
import Noty from 'noty';
import '../../node_modules/noty/lib/noty.css'
import '../../node_modules/noty/lib/themes/mint.css'
import styled from 'styled-components';
import {Cross} from 'styled-icons/icomoon/Cross';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

const RedCross = styled(Cross)`
        width:16px;
        color:red;
`

const TABLE = styled.table`
    border-collapse: collapse;
    width: 100%;

`
const TH = styled.th`
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
`
const TD = styled.td`
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
`

const Cart = ({cartItems,removeItemFromCart}) => {
    
    if(cartItems.length !== 0){
        let total = 0;
        return(
            <div>
                <Helmet>
                        <title>Cart</title>
                        <meta name="description" content="This is a different description for this route." />
                </Helmet>
                {/* <div className="d-flex" >
                <div style={{width:'100%'}}> */}
                <TABLE>
                <tbody>
                <tr>
                    <TH>Action</TH>
                    <TH>IMAGE</TH>
                    <TH>PRODUCT NAME</TH>
                    <TH>PRICE</TH>
                    <TH>QUANTITY</TH>
                    <TH>TOTAL</TH>
                </tr>
                    {cartItems.map((product)=>{
                        total +=product.price
                        return(
                            <tr key={product.id}>
                                <TD><RedCross onClick={removeItemFromCart.bind(null,product)} /></TD>
                                <TD>Image</TD>
                                <TD> {product.title}</TD>
                                <TD>${product.price}</TD>
                                <TD>{product.qty}</TD>
                                <TD> {product.qty*product.price}</TD>
                            </tr>
                        )
                    })}
                </tbody>
                    </TABLE>
                    {/* Total = ${parseInt(total)} */}
                    
                    <Link to="/checkout" >Proceed to checkout</Link>
                {/* </div>
                    
                </div> */}
            </div>
            
        )
    }else{
        return(
            <div className="container">
                <h1>No Items in cart</h1>
            </div>
        )
    }    
} 



const mapStateToProps = state => ({
    cartItems: state.cart
})

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: pro => {dispatch(removeFromCart(pro.id));new Noty({type:"warning",layout:"topRight",text:"Removed from cart",timeout:3000}).show()}
})

export default connect(mapStateToProps,mapDispatchToProps) (Cart);