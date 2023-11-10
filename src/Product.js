import React from "react";
import "./Product.css";

function Product() {
    return (
        <div className='Product'>
            <div className="Product__info">
                <p>Fastrack digital

                </p>
                <div className="product__rating"></div>
                <p className="Product__price">
                    <small>$</small>
                    <strong>19.99</strong>

                </p>
                <div className="Product__rating">
                    <p>⭐</p>
                    <p></p>
                    <p></p>

                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/61JtVmcxb0L._AC_SS450_.jpg" alt=""/>
<button>Add to Basket</button>
        </div>
    );
}
export default Product