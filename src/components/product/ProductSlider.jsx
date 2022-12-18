import React from 'react';
import { CartContext } from "../../App";
import 'swiper/css/pagination';
import 'swiper/css';

const ProductSlider = (img, alt) => {
    const { productItem } = React.useContext(CartContext);
    return (
        <>
            {[productItem].map((item) => {
                return (
                    <div className="product-profile product__wrapper-slider">
                        <div className="wrapper-slide"><img className='slide-img' src={item.img} alt={alt} /></div>
                    </div>
                )
            })}
        </>
    )
}

export default ProductSlider;