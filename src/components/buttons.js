import React from 'react';
import styled from 'styled-components';
import {Cart} from 'styled-icons/boxicons-solid/Cart';
import {Eye} from 'styled-icons/fa-regular/Eye';

export const RedCart = styled(Cart)`
    color:#FE7F2D;
    width:25px;
    cursor: pointer;
`
export const WhiteCart = styled(Cart)`
    color:#fff;
    width:25px;
    cursor: pointer;
`
export const RedEye = styled(Eye)`
    color:#FE7F2D;
    width:25px;
    cursor: pointer;
`


export const BUTTONHOME = styled.button`
    
    line-height: 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    border-radius: 0;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    padding: 13px 29px;
    letter-spacing: 0.05em;
    border: 2px solid #e4604a;
    position: relative;
    color: #000000;
    background-color:transparent;
    margin-bottom:25px;
    cursor: pointer;
    outline:none;

`
export const SINGLECARTBUTTON = styled.button`
    border-color: #F22D00;
    background: #F22D00;
    width: 180px;
    color: #FFF;
    padding: 10px;
    margin-top: 10px;
    outline: none;
    border: none;
    cursor: pointer;
`

