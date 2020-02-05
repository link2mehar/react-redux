import React,{useState} from 'react';
import { Menu, Icon,Carousel,Card,Layout, Breadcrumb ,Divider } from 'antd';
import { connect } from 'react-redux';
import Headerp from './header';
import Siderp from './Sider'
import Bread from './Bread';


import {Link} from 'react-router-dom';
import Routes from './routes';
const { Header, Content, Footer, Sider } = Layout;
const {Meta} =Card;
const { SubMenu } = Menu;

const Main = ({products,addtoCartShop}) => {


  

    const [currentMenu, setcurrentMenu] = useState({
        current:'mail'
    })
    const handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    return(
      
        <div>
          <Headerp />
          <div className="container">
            
            
              
                  
                
                    <Bread />
                    <div >
                      <Routes />
                    
                    </div>
                
            
          
          </div>
          <Footer style={{ textAlign: 'center' }}>Designed and Developed by link2mehar</Footer>
        </div>
    
  
   
     
      
      
        
     
        
    )
}
export default Main;





