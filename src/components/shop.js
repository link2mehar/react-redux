import React from 'react';
import { connect } from 'react-redux';
import {addtoCart} from '../store';
import Noty from 'noty';
import '../../node_modules/noty/lib/noty.css'
import '../../node_modules/noty/lib/themes/mint.css'
import styled from 'styled-components';
import Container from './container';
import img2 from '../uploads/dell.jpg'
import {RedCart,RedEye} from './buttons';
import {Link} from 'react-router-dom';

const Shop = ({products,addtoCartShop}) => {

    const Div = styled.div `
     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
     transition: all 0.3s cubic-bezier(.25,.8,.25,1);
     margin-bottom:10px;
     margin-left:10px;
     width:300px;
     border:1px solid transparent;
     box-sizing:border-box;
     padding-bottom:15px;
     &:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
        border-color: rgba(250,80,0,.54);
     }
    
    `
    const BUTTON = styled.button`
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    `

    return (
       
            <div className="container">
                <div className="d-flex" style={{flexWrap:'wrap',boxSizing:'border-box'}}>
                {products.map((product) => (
                    <Div key={product.id} >
                        <div>
                            <img src={img2} style={{width:'100%'}}/>
                        </div>
                        <h1 style={{fontSize:'15px'}}>{product.title}</h1>
                        <p><span >$12</span><span><del style={{fontSize:'14px'}}>${product.price}</del></span></p>
                        <div className="action-links">
                            <Link to={`/product/${product.id}`}>
                                <RedEye />
                            </Link>
                            <RedCart  onClick={addtoCartShop.bind(null,product)} />
                        </div>
                    </Div>
                ))}
                </div>
            </div>
        
    )
        
    
}

const mapStateToProps = state => ({
    products:state.products,
})
const mapDispatcToProps = dispatch => ({
    addtoCartShop: (product) => {
        dispatch(addtoCart(product.id,product.title,1,product.price));
        new Noty(
            {type:"success",
            layout:"topRight",
            text:"Added to cart",
            timeout:3000
            }).show()}

})

export default connect(mapStateToProps,mapDispatcToProps) (Shop);