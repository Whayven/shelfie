import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      currentProduct: {}
    };

    this.getInventory = this.getInventory.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios
      .get("/api/inventory")
      .then((res) => this.setState({ inventory: res.data }))
      .catch((err) => console.log(err));
  }

  selectProduct(product) {
    this.setState({
      currentProduct: product
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form getInventory={this.getInventory} currentProduct={this.state.currentProduct} />
        <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} selectProduct={this.selectProduct} />
      </div>
    );
  }
}

export default App;
