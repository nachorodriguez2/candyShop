import React from "react";

function ItemVendido(props) {
  return (
    <ul
      className="justify-content-center list-group list-group-horizontal mb-2"
      id={props.data.id}
    >
      <li className="list-group-item">{props.data.item.toUpperCase()}</li>
      <li className="list-group-item">
        {props.data.tipoVenta === "unidad"
          ? props.data.cantidad == 1
            ? props.data.cantidad + " unidad"
            : props.data.cantidad + " unidades"
          : props.data.cantidad + " gramos"}
      </li>
      <li className="list-group-item">Total: $ {props.data.total}</li>
      <svg
        className="bi bi-x text-danger"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => props.eliminarItem(props.data.id)}
      >
        <path
          fillRule="evenodd"
          d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
          clipRule="evenodd"
        />
      </svg>
    </ul>
  );
}

export default ItemVendido;
