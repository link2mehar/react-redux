import React,{useState, Fragment} from 'react';
import { connect } from 'react-redux';
import {addtoCart} from '../store';
import {H4} from './titles'
import {WhiteCart ,SINGLECARTBUTTON} from './buttons';
import Noty from 'noty';
import { Helmet } from 'react-helmet';

const Single = (props) => {
    let cartItem = props.cartItems.filter( c => c.id == props.match.params.id)[0];
    const [itemQty, setItemQty] = useState(cartItem ? cartItem.qty : 1)
    const [isAdding, setIsAdding] = useState(false)
    const increaseValue = () =>{
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        
        setItemQty(value)
    }
    const decreaseValue = () => {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        
        
        value--;
        if(value < 1){
            value=1
        }
        setItemQty(value)
      }


    let product = props.products.filter( p => p.id == props.match.params.id)[0];
    
   
    return(
        <div className="container">
             <Helmet>
                <title>{product.title}</title>
                <meta charSet="utf-8" />
                <meta name="description" content="A React.js application" />
            </Helmet>
            <div className="d-flex">
                <div className="s-images-container">
                    <img src="https://via.placeholder.com/300x250?text=300x250+MPU" />
                </div>
                <div className="s-data">
                    <H4>{product.title}</H4>
                    <p>Stock : 5</p>
                    <p className="single-price">Price: {product.price}</p>
                    <p>{product.style}</p>
                    <div>
                    <div class="value-button" id="decrease"  onClick={decreaseValue} value="Decrease Value">-</div>
                        <input type="number" id="number" value={itemQty} />
                    <div class="value-button" id="increase" onClick={increaseValue} value="Increase Value">+</div>
                    </div>
                    <SINGLECARTBUTTON onClick={() => props.singleaddToCart(product,itemQty)} >{isAdding ? 'Adding..' : <Fragment><WhiteCart />Add to cart</Fragment> }</SINGLECARTBUTTON>
                </div>
               
                
            </div>
            <div>
                
            </div>
        </div>
    )
    
    
}

const mapStateToProps = state => (

    {products:state.products,cartItems: state.cart}
)
const mapDispatchToProps = dispatch => (
    {
        singleaddToCart: (product,qty) => {
            dispatch(addtoCart(product.id,product.title,qty,product.price))
            
        },
        
    }
)
export default connect(mapStateToProps,mapDispatchToProps) (Single);