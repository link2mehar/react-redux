import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default () => (
    <div style={{margin:'25px 0'}}>
        <Tabs>
            <TabList>
                <Tab>UNISEX WATCHES</Tab>
                <Tab>UNISEX WATCHES</Tab>
                <Tab>UNISEX WATCHES</Tab>
                <Tab>UNISEX WATCHES</Tab>
            </TabList>
        
            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    </div>
  );