import React from 'react';
import styled from 'styled-components';
import {RedCart} from './buttons';

const Topnav = styled.nav`
    padding: 10px 0px;
    background: #f5f5f5;
  `

const TopNav = () => {
    return(
        <Topnav>
           <div className="container">
                <div className="d-flex">
                    <div>
                        <span>0900-78601</span>
                    </div>
                    <div>
                        <span style={{marginRight:'5px',fontSize:'12px',borderRight:'1px solid #fe7f2d',paddingRight:'5px'}}>ORDER STATUS</span>
                        <RedCart />
                    </div>
                </div>
           </div>
        </Topnav>
    )

}
export default TopNav;
