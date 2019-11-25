import React from 'react';
import styled from 'styled-components'
import {FacebookSquare} from 'styled-icons/boxicons-logos/FacebookSquare';
import {TwitterSquare} from 'styled-icons/fa-brands/TwitterSquare'
const RedFacebookSquare = styled(FacebookSquare)`
     color:#ffc107;
     width:32px;
`
const RedTwitterSquare = styled(TwitterSquare)`
     color:#ffc107;
     width:25px;
`
const Footer =() => {
    return(
        <footer>
            <div>
                <div>
                    <section>
                        <div>
                            <div>
                                <div>
                                    <h4>newsletter</h4>
                                    <form>
                                        <div>
                                            <input type="text" class="form-control" id="exampleFormControlInput" placeholder="Enter your email"/>
                                        </div>
                                        <button type="submit" class="btn btn-solid">subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section>
                <div>
                    <div>
                        <div>
                            <div>
                                <h4>about</h4>
                            </div>
                            <div>
                                <div class="footer-logo">
                                    <a href="/multikart/"><img src="/multikart/assets/images/icon/layout4/footerlogo.png" alt="" class="img-fluid" /></a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                                <div class="footer-social">
                                    <ul>
                                        <li><a href="#"><RedFacebookSquare /></a></li>
                                        <li><a href="/multikart/https://plus.google.com/"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><RedTwitterSquare /></a></li>
                                        <li><a href="/multikart/https://instagram.com"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="/multikart/https://rss.com/"><i class="fa fa-rss" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col offset-xl-1">
                            <div class="sub-title">
                                <div class="footer-title">
                                    <h4>my account</h4>
                                </div>
                                <div class="footer-contant" >
                                    <ul>
                                        <li><a href="/multikart/left-sidebar/collection">womens</a></li>
                                        <li><a href="/multikart/left-sidebar/collection">clothing</a></li>
                                        <li><a href="/multikart/left-sidebar/collection">accessories</a></li>
                                        <li><a href="/multikart/left-sidebar/collection">featured</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="sub-title">
                                <div class="footer-title">
                                    <h4>why we choose</h4>
                                </div>
                                <div class="footer-contant" >
                                    <ul><li><a href="#">shipping &amp; return</a></li>
                                    <li><a href="#">secure shopping</a></li>
                                    <li><a href="#">gallary</a></li>
                                    <li><a href="#">affiliates</a></li>
                                    <li><a href="#">contacts</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="sub-title">
                            <div class="footer-title">
                                <h4>store information</h4>
                            </div>
                            <div >
                                <ul >
                                    <li><i class="fa fa-map-marker"></i>Multikart Demo Store, Demo store India 345-659</li>
                                    <li><i class="fa fa-phone"></i>Call Us: 123-456-7898</li>
                                    <li><i class="fa fa-envelope-o"></i>Email Us: <a href="#">Support@Fiot.com</a></li>
                                    <li><i class="fa fa-fax"></i>Fax: 123456</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    )
}

export default Footer;