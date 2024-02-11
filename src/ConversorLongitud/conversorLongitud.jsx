import React, { useState } from "react";
import "./conversorLongitud.css";
function ConversorLongitud() {
  const [valor, setValor] = useState("");
  const [unidad, setUnidad] = useState("m");
  const [resultado, setResultado] = useState("");

  const handleValorChange = (e) => {
    setValor(e.target.value);
    convertirLongitud(e.target.value, unidad);
  };

  const handleUnidadChange = (e) => {
    setUnidad(e.target.value);
    convertirLongitud(valor, e.target.value);
  };

  const convertirLongitud = (valor, unidad) => {
    let resultadoConvertido;

    if (unidad === "m") {
      resultadoConvertido = {
        m: parseFloat(valor),
        yd: parseFloat(valor) * 1.09361,
        ft: parseFloat(valor) * 3.28084,
        in: parseFloat(valor) * 39.3701,
      };
    } else if (unidad === "yd") {
      resultadoConvertido = {
        m: parseFloat(valor) * 0.9144,
        yd: parseFloat(valor),
        ft: parseFloat(valor) * 3,
        in: parseFloat(valor) * 36,
      };
    } else if (unidad === "ft") {
      resultadoConvertido = {
        m: parseFloat(valor) * 0.3048,
        yd: parseFloat(valor) * 0.333333,
        ft: parseFloat(valor),
        in: parseFloat(valor) * 12,
      };
    } else if (unidad === "in") {
      resultadoConvertido = {
        m: parseFloat(valor) * 0.0254,
        yd: parseFloat(valor) * 0.0277778,
        ft: parseFloat(valor) * 0.0833333,
        in: parseFloat(valor),
      };
    }

    setResultado(resultadoConvertido);
  };

  return (
    <div>
      <h2>Conversor de longitud</h2>
      <input type="number" value={valor} onChange={handleValorChange} />
      <select value={unidad} onChange={handleUnidadChange}>
        <option value="m">Metros</option>
        <option value="yd">Yardas</option>
        <option value="ft">Pies</option>

        <option value="in">Pulgadas</option>
      </select>
      <div>
        Resultado:
        <ul>
          <li>Metros: {resultado.m}</li>
          <li>Yardas: {resultado.yd}</li>
          <li>Pies: {resultado.ft}</li>
          <li>Pulgadas: {resultado.in}</li>
        </ul>
      </div>
    </div>
  );
}

export default ConversorLongitud;
