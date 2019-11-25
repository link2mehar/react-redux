import React from 'react';
import { connect } from 'react-redux';
import {addtoCart} from '../store';

const Single = (props) => {
    let product = props.products.filter( p => p.id == props.match.params.id)[0];
    return(
        <div className="container">
            <div>
                {console.log(product)}
                <p>{product.title}</p>
                <button onClick={props.singleaddToCart(product)}>Buy</button>
            </div>
        </div>
    )
    
    
}

const mapStateToProps = state => (

    {products:state.products}
)
const mapDispatchToProps = dispatch => (
    {singleaddToCart: (product) => {dispatch(addtoCart(product.id,product.title,1,product.price))}}
)
export default connect(mapStateToProps,mapDispatchToProps) (Single);