import React, { useState } from "react";
import "./conversorTiempo.css";
function ConversorTiempo() {
  const [valor, setValor] = useState("");
  const [unidad, setUnidad] = useState("segundos");
  const [resultado, setResultado] = useState("");

  const handleValorChange = (e) => {
    setValor(e.target.value);
    convertirTiempo(e.target.value, unidad);
  };

  const handleUnidadChange = (e) => {
    setUnidad(e.target.value);
    convertirTiempo(valor, e.target.value);
  };

  const convertirTiempo = (valor, unidad) => {
    let resultadoConvertido;

    if (unidad === "segundos") {
      resultadoConvertido = {
        segundos: parseFloat(valor),
        minutos: parseFloat(valor) / 60,
        horas: parseFloat(valor) / 3600,
        dias: parseFloat(valor) / 86400,
        meses: parseFloat(valor) / (86400 * 30),
        años: parseFloat(valor) / (86400 * 365),
      };
    } else if (unidad === "minutos") {
      resultadoConvertido = {
        segundos: parseFloat(valor) * 60,
        minutos: parseFloat(valor),
        horas: parseFloat(valor) / 60,
        dias: parseFloat(valor) / 1440,
        meses: parseFloat(valor) / (1440 * 30),
        años: parseFloat(valor) / (1440 * 365),
      };
    } else if (unidad === "horas") {
      resultadoConvertido = {
        segundos: parseFloat(valor) * 3600,
        minutos: parseFloat(valor) * 60,
        horas: parseFloat(valor),
        dias: parseFloat(valor) / 24,
        meses: parseFloat(valor) / (24 * 30),
        años: parseFloat(valor) / (24 * 365),
      };
    } else if (unidad === "dias") {
      resultadoConvertido = {
        segundos: parseFloat(valor) * 86400,
        minutos: parseFloat(valor) * 1440,
        horas: parseFloat(valor) * 24,
        dias: parseFloat(valor),
        meses: parseFloat(valor) / 30,
        años: parseFloat(valor) / 365,
      };
    } else if (unidad === "meses") {
      resultadoConvertido = {
        segundos: parseFloat(valor) * 86400 * 30,
        minutos: parseFloat(valor) * 1440 * 30,
        horas: parseFloat(valor) * 24 * 30,
        dias: parseFloat(valor) * 30,
        meses: parseFloat(valor),
        años: parseFloat(valor) / 12,
      };
    } else if (unidad === "años") {
      resultadoConvertido = {
        segundos: parseFloat(valor) * 86400 * 365,
        minutos: parseFloat(valor) * 1440 * 365,
        horas: parseFloat(valor) * 24 * 365,
        dias: parseFloat(valor) * 365,
        meses: parseFloat(valor) * 12,
        años: parseFloat(valor),
      };
    }

    setResultado(resultadoConvertido);
  };

  return (
    <div>
      <h2>Conversor de tiempo</h2>
      <input type="number" value={valor} onChange={handleValorChange} />
      <select value={unidad} onChange={handleUnidadChange}>
        <option value="segundos">Segundos</option>
        <option value="minutos">Minutos</option>
        <option value="horas">Horas</option>
        <option value="dias">Días</option>
        <option value="meses">Meses</option>
        <option value="años">Años</option>
      </select>
      <div>
        Resultado:
        <ul>
          <li>Segundos: {resultado.segundos}</li>
          <li>Minutos: {resultado.minutos}</li>
          <li>Horas: {resultado.horas}</li>
          <li>Días: {resultado.dias}</li>
          <li>Meses: {resultado.meses}</li>
          <li>Años: {resultado.años}</li>
        </ul>
      </div>
    </div>
  );
}

export default ConversorTiempo;
