import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {addtoCart} from '../../store';
import { Menu, Icon,Carousel,Card,Layout, Breadcrumb ,Divider,Pagination,Radio  } from 'antd';
import { connect } from 'react-redux';
import PriceSilder from './PriceSlider';
const {Meta} =Card;

const Productsist = (props) => {
    const {products,addtoCartShop} = props;
   
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const page = parseInt(params.get('page')) || 1;

    const [size,setSize] = useState(0);
    const [abv,setAbv] = useState(0);
    const filterProductsHandler = () => {
          console.log('chnaged');
    }
    const priceofProducts = () => {
        return products.map(p => p.price )
    } 
    const maxPrice = () => {
        return Math.max(...priceofProducts());
    }
    const maxp = maxPrice();
    const minPrice = () => {
        return Math.min(...priceofProducts());
    }
    const minp = minPrice();
    
    
    return(
        <div>
            <div>
                {/* <h2>Filter by Price</h2>
                <PriceSilder max={maxp} min={minp} /> */}
           </div>
        
        <div className="d-flex" style={{flexWrap:'wrap', justifyContent:'start',marginTop:'50px',boxSizing:'border-box'}}>
            
            {products.map((product) => (
                
                <Card key={product.id}
                hoverable
                className="product-card"
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                <div >
                    <Link to={`/product/${product.id}`}>
                    <Meta title="Test product"  />
                    </Link>
                    <div className="d-flex">
                    <p>Price: $15</p>
                    <Icon type="shopping-cart" onClick={addtoCartShop.bind(null,product)} />
                    </div>
                    
                </div>
                
                </Card>
                
                ))}
                
                
            </div>
            <Pagination defaultCurrent={1} total={50} />
            </div>

    )

}
const mapStateToProps = state => ({
    products:state.products,
  })
  const mapDispatcToProps = dispatch => ({
    addtoCartShop: (product) => {
        dispatch(addtoCart(product.id,product.title,1,product.price));
        }
  
  })
  
export default connect(mapStateToProps,mapDispatcToProps) (Productsist);

