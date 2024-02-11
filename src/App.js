import logo from "./logo.svg";
import "./App.css";
import ConversorLongitud from "./ConversorLongitud/conversorLongitud";
import ConversorPeso from "./ConversorPeso/conversorPeso";
import ConversorTemperatura from "./ConversorTemperatura/conversorTemperatura";
import ConversorTiempo from "./ConversorTiempo/conversorTiempo";

function App() {
  return (
    <div className="App">
      <ConversorLongitud />
      <ConversorPeso />
      <ConversorTemperatura />
      <ConversorTiempo />
    </div>
  );
}

export default App;
