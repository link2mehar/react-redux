import React,{useState} from 'react';
import Loginform from './addProduct';
import Productlist from './productList';
import { Layout, Menu, Icon,Avatar ,Row, Col } from 'antd';
import AdminRoutes from './adminroutes';
import {
  Link
} from "react-router-dom";
const { Header, Sider, Content } = Layout;

const AdminPage = () => {
  const [AdminPageState, setAdminPageState] = useState(
      {
        collapsed: false,
      }
  )
  const toggle = () => {
    setAdminPageState({
      collapsed: !AdminPageState.collapsed,
    });
  }
 
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={AdminPageState.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="dashboard" /> 
               <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="table" />
              
              <Link to="/allproducts" style={{color:'#fff'}}>All Products</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="plus-square" /> 
             
              <Link to="/addproduct" style={{color:'#fff'}}>Add Product</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="file-add" />
              <Link to="/addcategory" style={{color:'#fff'}}>Add Category</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="mail" />
      
              <Link to="/smtp" style={{color:'#fff'}}>Smtp</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="setting" />
              <Link to="/settings" style={{color:'#fff'}}>Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
          <Row type="flex" justify="space-between">
            <Col span={4}>
              <Icon
                className="trigger"
                type={AdminPageState.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggle}
              /></Col>
            <Col span={8}>col-8</Col>
          </Row>
            
           
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
             <AdminRoutes />
          </Content>
        </Layout>
      </Layout>
    );
 
}
export default AdminPage;