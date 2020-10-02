import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      // Default Img: "https://s3.amazonaws.com/bloc-global-assets/almanac-assets/bootcamps/logos/000/002/656/original/DevMountain.jpg?1467187319"
      img: "",
      defaultImg:
        "https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png",
    };
  }

  handleName = (name) => this.setState({ name });

  handlePrice = (price) => this.setState({ price });

  handleImg = (img) => this.setState({ img });

  addProduct = (e) => {
    e.preventDefault();
    const { name, price, img, defaultImg } = this.state;
    const imgUrl = img ? img : defaultImg;
    
    axios.post('/api/inventory', { name, price, img: imgUrl })
    .then(() => this.props.getInventory())
    .catch((err) => console.log(err));

    this.setState({
      name: "",
      price: 0,
      img: "",
    });
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      price: 0,
      img: "",
    });
  };

  render() {
    const { name, price, img, defaultImg } = this.state;

    return (
      <div>
        <form id="product-form">
          <img
            className="placeholder-img pf-centered"
            src={img ? img : defaultImg}
            alt="placeholder"
            height="225"
            width="375"
          />
          <label>Product Name:</label>
          <input
            value={name}
            className="form-input"
            type="text"
            onChange={(e) => this.handleName(e.target.value)}
          />
          <label>Product Price:</label>
          <input
            value={price}
            className="form-input"
            type="number"
            onChange={(e) => this.handlePrice(e.target.value)}
          />
          <label>Product Image:</label>
          <input
            value={img}
            className="form-input"
            type="text"
            onChange={(e) => this.handleImg(e.target.value)}
          />
          <div className="form-controls">
            <button className="form-button" onClick={this.resetForm}>
              Cancel
            </button>
            <button className="form-button" onClick={this.addProduct}>Add to Inventory</button>
          </div>
        </form>
      </div>
    );
  }
}
