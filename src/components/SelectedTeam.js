import React from "react";
import Headliners from "./Headliners";
import Substitutes from "./Substitutes";

function Selected(props) {
  return (
    <>
      <section>
        <h1>Equipo seleccionado: </h1>
        <Headliners />
        <Substitutes />
      </section>
    </>
  );
}

export default Selected;
