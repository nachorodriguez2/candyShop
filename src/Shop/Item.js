import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: "",
      comprado: false,
      cssForm: "item",
      costo: "",
      cantVendidos: 0,
    };
    this.compra = this.compra.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const valor =
      this.props.data.cantidad === "unidad"
        ? event.target.value * this.props.data.precio
        : (event.target.value * this.props.data.precio) / 1000;
    this.setState({
      name: event.target.name,
      value: event.target.value,
      costo: valor,
    });
  }

  compra(e) {
    e.preventDefault();

    if (this.state.value !== "" && this.state.value > 0) {
      let index;

      if (localStorage.key(0) === null) {
        index = 1;
      } else {
        const arrLS = Object.keys(localStorage);
        index = arrLS.length + 1;
      }

      const obj = {
        id: index,
        item: this.state.name,
        cantidad: this.state.value,
        tipoVenta: this.props.data.cantidad,
        total: this.state.costo,
      };

      localStorage.setItem(`${index}`, JSON.stringify(obj));

      this.setState((prevState) => {
        return {
          value: "",
          costo: "",
          comprado: true,
          cssForm: "item-comprado",
          cantVendidos: prevState.cantVendidos + 1,
        };
      });

      setTimeout(() => {
        this.setState({ cssForm: "item" });
      }, 2000);
    }

    // const cosas = Object.keys(localStorage);
    // console.log(localStorage.getItem(cosas[0]));
  }

  render() {
    return (
      <div className={this.state.cssForm}>
        <div className="foto-contenedor">
          <img
            id="imgItem"
            src={
              this.state.cssForm === "item-comprado"
                ? require(`./img/carro.gif`)
                : require(`./img/candy/${this.props.data.nombre}.jpg`)
            }
          />
          {this.state.comprado && (
            <i className="far fa-check-circle icon">Comprado!</i>
          )}
        </div>

        <div className="descripcion">
          <h5>{this.props.data.nombre.toUpperCase()}</h5>
          <p>
            Precio por{" "}
            {this.props.data.cantidad === "unidad" ? "unidad" : "kilo"} - ${" "}
            {this.props.data.precio}
          </p>
        </div>

        <form onSubmit={this.compra}>
          <input
            type="number"
            name={this.props.data.nombre}
            id="cantidad"
            step={this.props.data.cantidad === "unidad" ? "1" : "50"}
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Cantidad..."
          />
          <label>
            {this.props.data.cantidad === "unidad" ? "unidad" : "gramos"}
          </label>
          <p>Total: {this.state.costo}</p>
          <button className="boton" type="submit">
            Comprar!
          </button>
          <br />
        </form>
      </div>
    );
  }
}

export default Item;
