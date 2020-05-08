import React, { Component } from "react";
import Item from "./Item";
import data from "./data";
import axios from "axios";

class Shop extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container text-center">
        <h1 className="titulo-shop">
          Shop
          <br />
          Elegí tus productos y pagalos en el Check-Out
        </h1>
        <div className="listaProductos">
          {data.map((item) => (
            <Item data={item} key={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Shop;
