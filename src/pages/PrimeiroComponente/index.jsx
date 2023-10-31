import React from "react";
import "./index.css";

function PrimeiroComponente({ valor }) {
  return (
    <>
      <h1>Página inicial</h1>
      <p>Olá Mundo!</p>
      <p>{valor}</p>
      <img src="./public/vite.svg" alt="" />
    </>
  );
}

export default PrimeiroComponente;
