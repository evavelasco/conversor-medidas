import React, { useState } from "react";
import "./ConversorPeso.css";
function ConversorPeso() {
  const [valor, setValor] = useState("");
  const [unidad, setUnidad] = useState("Kg");
  const [resultado, setResultado] = useState("");

  const handleValorChange = (e) => {
    setValor(e.target.value);
    convertirPeso(e.target.value, unidad);
  };

  const handleUnidadChange = (e) => {
    setUnidad(e.target.value);
    convertirPeso(valor, e.target.value);
  };

  const convertirPeso = (valor, unidad) => {
    let resultadoConvertido;

    if (unidad === "Kg") {
      resultadoConvertido = {
        lb: parseFloat(valor) * 2.20462,
        oz: parseFloat(valor) * 35.274,
        Kg: parseFloat(valor),
      };
    } else if (unidad === "lb") {
      resultadoConvertido = {
        lb: parseFloat(valor),
        oz: parseFloat(valor) * 16,
        Kg: parseFloat(valor) * 0.453592,
      };
    } else if (unidad === "oz") {
      resultadoConvertido = {
        lb: parseFloat(valor) * 0.0625,
        oz: parseFloat(valor),
        Kg: parseFloat(valor) * 0.0283495,
      };
    }
    setResultado(resultadoConvertido);
  };

  return (
    <div>
      <h2>Conversor de peso</h2>
      <input type="number" value={valor} onChange={handleValorChange} />
      <select value={unidad} onChange={handleUnidadChange}>
        <option value="Kg">Kilogramos</option>
        <option value="lb">Libras</option>
        <option value="oz">Onzas</option>
      </select>
      <div>
        Resultado:
        <ul>
          <li>Kilogramos:{resultado.Kg}</li>
          <li>Libras:{resultado.lb}</li>
          <li>Onzas:{resultado.oz}</li>
        </ul>
      </div>
    </div>
  );
}

export default ConversorPeso;
