import React from "react";
import style from "./Product.module.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
// import ProductDetails from "./ProductDetails";

const Product = ({ product_list, handleClick }) => {

  return (
    <>
      <div className={`${style["product-list-container"]}`}>
        <ul className={`${style["product-list"]}`}>
          {product_list.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index} onClick={()=> handleClick(product)}>
              <li className={`${style["list"]}`}>
                <div className={`${style["card"]}`}>
                  <img src={product.image} alt="Avatar" style={{width: "100%"}} />
                  <div className={`${style["container"]}`}>
                    <h4><b>{product.title}</b></h4>
                    <p>{product.price}</p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      
    </>
  );
};

Product.propTypes = {
  product_list: PropTypes.array,
  handleClick: PropTypes.func
}
export default Product;
