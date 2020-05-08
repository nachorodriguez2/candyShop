import React, { Component } from "react";
import ItemVendido from "./ItemVendido";

class CheckOut extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      total: "",
    };
    this.eliminarItem = this.eliminarItem.bind(this);
  }

  eliminarItem(clave) {
    localStorage.removeItem(clave);

    let arrKeys = Object.keys(localStorage);
    arrKeys = arrKeys.sort();
    const vendidos = arrKeys.map((k) => JSON.parse(localStorage.getItem(k)));

    const arr = arrKeys.map((k) => JSON.parse(localStorage.getItem(k)));

    let tot = 0;

    for (let i = 0; i < arr.length; i++) {
      tot += arr[i].total;
    }

    this.setState({ data: vendidos, total: tot });
  }

  componentDidMount() {
    let arrKeys = Object.keys(localStorage);
    arrKeys = arrKeys.sort();
    const vendidos = arrKeys.map((k) => JSON.parse(localStorage.getItem(k)));

    const arr = arrKeys.map((k) => JSON.parse(localStorage.getItem(k)));

    let tot = 0;

    for (let i = 0; i < arr.length; i++) {
      tot += arr[i].total;
    }

    this.setState({ data: vendidos, total: tot });
  }

  render() {
    const itemsVendidos = this.state.data.map((item) => (
      <ItemVendido key={item.id} eliminarItem={this.eliminarItem} data={item} />
    ));

    return (
      <div>
        <div className="mt-5 mb-4">{itemsVendidos}</div>
        {this.state.total === 0 ? (
          <div className="text-center mt-5">
            <h2 className="mt-2 mb-4">Tu bolsa de caramelos está vacía...</h2>
            <h3 className="mt-2 mb-4">
              Volvé a la sección de shop para comprar
            </h3>
            <svg
              className="bi bi-bag text-center"
              width="10em"
              height="10em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z"
                clip-rule="evenodd"
              />
              <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
            </svg>
          </div>
        ) : (
          <h4 className="text-center">Total: {this.state.total}</h4>
        )}
      </div>
    );
  }
}

export default CheckOut;
