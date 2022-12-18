import React from "react";
import { CartContext } from "../../App";

const ProductInfo = () => {
    const { productItem } = React.useContext(CartContext);
    return (
        <div className="product-info">
            {[productItem].map((item) => {
                return (
                    <div className="product__profile-info">
                        <div className="row">
                            <h2 className="product-title">{item.title}</h2>
                            <h3 className="product-price">{item.price}&nbsp;₽</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductInfo;