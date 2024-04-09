/* eslint-disable react/prop-types */
import React from 'react'
import style from "./Product.module.css";
const ProductDetails = ({ product }) => {
    return (
        <>
            <div className={`${style["card"]}`}>
                <img src={product.image} alt="Avatar" style={{ width: "100%" }} />
                <div className={`${style["container"]}`}>
                    <h4><b>{product.title}</b></h4>
                    <p>{product.price}</p>
                    <p>Description {product.description}</p>
                    <p>Rating: {product.rating.rate}</p>
                    <p>Quantity: {product.rating.count}</p>

                </div>
            </div>
            {/* <div className={`${style["product-details-container"]}`}>
                <div className={`${style["product-details-card"]}`}>
                    <h2>{product.id}</h2>
                    <p>Title: {product.title}</p>
                    <p>Price: ${product.price}</p>
                    
                    
                </div>

            </div> */}
        </>

    );
};

export default ProductDetails