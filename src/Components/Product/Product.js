import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
  render() {
    const { product } = this.props;
    const defaultUrl =
      "https://s3.amazonaws.com/bloc-global-assets/almanac-assets/bootcamps/logos/000/002/656/original/DevMountain.jpg?1467187319";
    return (
      <div className="product-card">
        <img
          className="product-img"
          src={product.img ? product.img : defaultUrl}
          alt="product thumbnail"
        />
        <section className="product-info">
          <span>{product.name}</span>
          <span>${product.price}</span>
        </section>
        <section className="product-controls">
          <button
            className="product-button"
            onClick={() => this.props.deleteFn(product.id)}
          >
            Delete
          </button>
          <button className="product-button">Edit</button>
        </section>
      </div>
    );
  }
}
