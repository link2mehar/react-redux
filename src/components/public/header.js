import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon,Carousel,Card,Layout, Breadcrumb ,Divider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const Headerp = () => {
    return(
        <Header className="header" style={{ width: '100%' }}>
      
            <div className="container">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/" >Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/cart" >Cart</Link></Menu.Item>
                    <Menu.Item key="3">Womens</Menu.Item>
                </Menu>
            </div>
    </Header>
    )
}

export default Headerp;