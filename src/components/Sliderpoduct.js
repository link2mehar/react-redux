import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from 'react-redux';
import img1 from '../uploads/dell.jpg'

const Sliderpoduct = ({products}) =>{

    return(
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={products.length} >
            <Slider>
                {products.map(product =>(
                    <Slide index={product.id}>
                        <img src={img1} style={{width:'100%'}}/>
                    </Slide>
                ))}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    )

}

const mapStateToProps = state => {
    return({
        products: state.products
    }      
    )
}

export default connect(mapStateToProps,null) (Sliderpoduct);