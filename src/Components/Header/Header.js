import React, { Component } from "react";
import "./Header.css";
import logo from "./shelfie_icon.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="brand">
          <img src={logo} alt="Shelfie Logo" />
          <h1>SHELFIE</h1>
        </div>
      </header>
    );
  }
}
