import React from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
const Dashboard = () => {
    return(
        <div className="gutter-example">
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box flex">
                        <div style={{width: '80px',textAlign:'center',alignSelf:'center'}}><Icon type="shopping-cart" style={{ fontSize: '25px', color: '#fff' }} /></div>
                        <div>
                            <h3>510</h3>
                            <span>Orders received</span>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box flex">
                        <div style={{width: '80px',textAlign:'center',alignSelf:'center'}}><Icon type="camera" style={{ fontSize: '25px', color: '#fff' }} /></div>
                        <div>
                            <h3>510</h3>
                            <span>Orders received</span>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box flex">
                        <div style={{width: '80px',textAlign:'center',alignSelf:'center'}}><Icon type="mail" style={{ fontSize: '25px', color: '#fff' }} /></div>
                        <div>
                            <h3>510</h3>
                            <span>Orders received</span>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box flex">
                        <div style={{width: '80px',textAlign:'center',alignSelf:'center'}}><Icon type="message" style={{ fontSize: '25px', color: '#fff' }} /></div>
                        <div>
                            <h3>510</h3>
                            <span>Orders received</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;