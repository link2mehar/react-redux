import React from 'react';
import { List, Avatar, Icon,Popconfirm ,message, Button  } from 'antd';
const productList = () => {
    const Deletetext = 'Are you sure delete this task?';
    const Edittext = 'Are you sure edit this task?';

    function confirm() {
    message.info('Click on Yes.');
    }

    const listData = [];
    for (let i = 0; i < 25; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        category: 'Laptops',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
    }

        const pagination = {
        pageSize: 10,
        current: 1,
        total: listData.length,
        onChange: (() => {}),
        };

        const IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
        );

        return(
            <List
            itemLayout="vertical"
            size="large"
            pagination={pagination}
            dataSource={listData}
            renderItem={item => (
            <List.Item
                key={item.title}
                actions={[
                <Popconfirm placement="top" title={Deletetext} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button>Delete</Button>
                </Popconfirm>,
                <Popconfirm placement="top" title={Edittext} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button>Edit</Button>
                </Popconfirm>,
                ]}
                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            >
                <List.Item.Meta
                
                title={<a href={item.href}>{item.title}</a>}
                description={item.category}
                />
                {item.content}
            </List.Item>
            )}
        />
        )
        

        }
        export default productList;

