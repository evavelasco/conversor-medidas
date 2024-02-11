import React, { useState } from "react";
import "./conversorTemperatura.css";
function ConversorTemperatura() {
  const [valor, setValor] = useState("");
  const [unidad, setUnidad] = useState("celsius");
  const [resultado, setResultado] = useState("");

  const handleValorChange = (e) => {
    setValor(e.target.value);
    convertirTemperatura(e.target.value, unidad);
  };

  const handleUnidadChange = (e) => {
    setUnidad(e.target.value);
    convertirTemperatura(valor, e.target.value);
  };

  const convertirTemperatura = (valor, unidad) => {
    let resultadoConvertido;

    if (unidad === "celsius") {
      resultadoConvertido = {
        celsius: parseFloat(valor),
        fahrenheit: parseFloat(valor) * 1.8 + 32,
        kelvin: parseFloat(valor) + 273.15,
      };
    } else if (unidad === "fahrenheit") {
      resultadoConvertido = {
        celsius: (parseFloat(valor) - 32) / 1.8,
        fahrenheit: parseFloat(valor),
        kelvin: (parseFloat(valor) - 32) / 1.8 + 273.15,
      };
    } else if (unidad === "kelvin") {
      resultadoConvertido = {
        celsius: parseFloat(valor) - 273.15,
        fahrenheit: (parseFloat(valor) - 273.15) * 1.8 + 32,
        kelvin: parseFloat(valor),
      };
    }

    setResultado(resultadoConvertido);
  };

  return (
    <div>
      <h2>Conversor de temperatura</h2>
      <input type="number" value={valor} onChange={handleValorChange} />
      <select value={unidad} onChange={handleUnidadChange}>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
      </select>
      <div>
        Resultado:
        <ul>
          <li>Celsius: {resultado.celsius}</li>
          <li>Fahrenheit: {resultado.fahrenheit}</li>
          <li>Kelvin: {resultado.kelvin}</li>
        </ul>
      </div>
    </div>
  );
}

export default ConversorTemperatura;
