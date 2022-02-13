import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./operationsView.scss";

const OperationsView = () => {
  const resultado = useSelector(
    (resultado) => resultado.messageReducer.resultado
  );

  const suma = useSelector((suma) => suma.messageReducer.suma);
  const resta = useSelector((resta) => resta.messageReducer.resta);

  const multiplicacion = useSelector(
    (multiplicacion) => multiplicacion.messageReducer.multiplicacion
  );

  const division = useSelector((division) => division.messageReducer.division);

  return (
    <div className="operations">
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        Operaciones Realizadas <br /> Datos obtenidos del store
      </div>
      <hr />
      <div style={{ marginTop: 20 }}>
        {suma !== undefined ? `Suma: ${suma} ` : "Suma:"}
      </div>
      <div style={{ marginTop: 20 }}>
        {resta !== undefined ? `Resta: ${resta} ` : "Resta:"}
      </div>
      <div style={{ marginTop: 20 }}>
        {multiplicacion !== undefined
          ? `Multiplicacion: ${multiplicacion} `
          : "Multiplicacion:"}
      </div>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        {division !== undefined ? `Division: ${division} ` : "Division:"}
      </div>
      {/* <div style={{ marginTop: 20, marginBottom: 20 }}>
        {resultado !== undefined ? `Resultado: ${resultado} ` : "Resultado:"}
      </div> */}
      <hr />

      <div style={{ marginTop: 20, marginBottom: 20, textAlign: "initial" }}>
        <b>Notas:</b> <br /> 1: Si coloca mas de una operacion, se pintara el
        resultado de todo en la primera operacion colocada.
        <br /> 2: Con el boton "C" se limpia pantalla.
      </div>
    </div>
  );
};

export default OperationsView;
