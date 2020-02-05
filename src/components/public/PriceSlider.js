import React,{useState} from 'react';
import {connect} from 'react-redux'
import { Slider, Switch } from 'antd';

const  PriceSilder = (props) =>  {
  const [disabled, setdisabled] = useState(false)

    const onPriceChange = (value) => {
        const pr = props.products.filter(p => p.price > value[0] && p.price < value[1])
        console.log(pr);
        
    }
    
    return (
      <div>
        
        <Slider range onChange={onPriceChange} max = {props.max} defaultValue={[0,Math.trunc(props.max)]} min= {Math.trunc(props.min)} disabled={disabled} />
        
      </div>
    );
  
}
const mapStateToProps = state => ({
  products:state.products,
})


export default connect(mapStateToProps,null) (PriceSilder);
