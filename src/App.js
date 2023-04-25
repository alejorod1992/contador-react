import "./App.css";
import contadorDeClicksLogo from "./img/CONTADOR DE CLICKS.png";
import Boton from "./components/boton";
import Contador from "./components/contador";
import { useState } from "react";

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1) ;
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };


  return (
    <div className="App">
      <div className="banner">
        <img 
        className="banner_logo" 
        src={contadorDeClicksLogo} 
        alt="Banner contador de clicks"/>
      
      </div>
      <div className="container">
      <Contador
       numClics={numClics} />
      <Boton 
        texto="Click"
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton 
          texto="Restart"
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
