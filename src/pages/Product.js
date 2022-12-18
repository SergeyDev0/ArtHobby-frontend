import React from 'react';
import Header from '../components/header/Header';
import ProductSlider from "../components/product/ProductSlider"
import ProductInfo from "../components/product/ProductInfo"
import ProductLiner from "../components/product/ProductLiner"

const Product = () => {
return (
    <div className="wrapper-product">
        <Header />
        <ProductSlider />
        <ProductInfo />
        <ProductLiner />
    </div>
) 
}

export default Product;