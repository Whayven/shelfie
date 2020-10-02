import React, { Component } from "react";
import axios from "axios";

import Product from "../Product/Product";

export default class Dashboard extends Component {
  deleteItem = (id) => {
    axios.delete(`/api/inventory/${id}`)
    .then(() => this.props.getInventory())
    .catch(err => console.log(err));
  }

  render() {
    const { inventory } = this.props;
    return (
      <div>
        {
          inventory.map((el, i) => <Product product={el} key={i} deleteFn={this.deleteItem} />)
        }
      </div>
    )
  }
}