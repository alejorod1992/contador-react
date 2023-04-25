import React from "react";
import "../style/style.css";

function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
    <button className={esBotonDeClick ? "boton_click" : "boton_reiniciar"} onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;