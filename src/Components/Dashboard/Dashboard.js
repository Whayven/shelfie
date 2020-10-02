import React, { Component } from "react";

import Product from "../Product/Product";

export default class Dashboard extends Component {
  render() {
    const { inventory } = this.props;
    return (
      <div>
        {
          inventory.map(el => <Product product={el} />)
        }
      </div>
    )
  }
}