import React from 'react';
import Slider from "react-slick";
import img1 from '../uploads/dell.jpg'
import {H4} from './titles';
import {BUTTONHOME} from './buttons';

const Silk = () => {
   

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        className: "center",
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        
      };
      return(
            <div style={{width:'1370px',overflow:'hidden',margin:'auto'}}>
                <Slider {...settings}>
                   
                        <div>
                            <div>
                                <img src={img1} style={{width:'100%'}}/>
                            </div>
                            <H4 >Test product</H4>
                            <p><span >$12</span><span><del style={{fontSize:'14px'}}>$155</del></span></p>
                            <BUTTONHOME >Add to Cart</BUTTONHOME>
                        </div>
                        <div>
                            <div>
                                <img src={img1} style={{width:'100%'}}/>
                            </div>
                            <H4 >Test product</H4>
                            <p><span >$12</span><span><del style={{fontSize:'14px'}}>$155</del></span></p>
                            <BUTTONHOME >Add to Cart</BUTTONHOME>
                        </div>
                        <div>
                            <div>
                                <img src={img1} style={{width:'100%'}}/>
                            </div>
                            <H4 >Test product</H4>
                            <p><span >$12</span><span><del style={{fontSize:'14px'}}>$155</del></span></p>
                            <BUTTONHOME >Add to Cart</BUTTONHOME>
                        </div>
                        <div>
                            <div>
                                <img src={img1} style={{width:'100%'}}/>
                            </div>
                            <H4 >Test product</H4>
                            <p><span >$12</span><span><del style={{fontSize:'14px'}}>$155</del></span></p>
                            <BUTTONHOME >Add to Cart</BUTTONHOME>
                        </div>
                        <div>
                            <div>
                                <img src={img1} style={{width:'100%'}}/>
                            </div>
                            <H4 >Test product</H4>
                            <p><span >$12</span><span><del style={{fontSize:'14px'}}>$155</del></span></p>
                            <BUTTONHOME >Add to Cart</BUTTONHOME>
                        </div>
                        <div>
                            <div>
                                <img src={img1} style={{width:'100%'}}/>
                            </div>
                            <H4 >Test product</H4>
                            <p><span >$12</span><span><del style={{fontSize:'14px'}}>$155</del></span></p>
                            <BUTTONHOME >Add to Cart</BUTTONHOME>
                        </div>
                        <div>
                            <div>
                                <img src={img1} style={{width:'100%'}}/>
                            </div>
                            <H4 >Test product</H4>
                            <p><span >$12</span><span><del style={{fontSize:'14px'}}>$155</del></span></p>
                            <BUTTONHOME >Add to Cart</BUTTONHOME>
                        </div>
                        <div>
                            <div>
                                <img src={img1} style={{width:'100%'}}/>
                            </div>
                            <H4 >Test product</H4>
                            <p><span >$12</span><span><del style={{fontSize:'14px'}}>$155</del></span></p>
                            <BUTTONHOME >Add to Cart</BUTTONHOME>
                        </div>
                    
                
                
                
                </Slider>
            </div>
      )

}
export default Silk;