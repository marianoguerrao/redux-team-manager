import React from "react";
import { connect } from "react-redux";
import { erasePlayer } from "../actionCreators";

function Headliners(props) {
  return (
    <>
      <h1>Titulares:</h1>
      <div className="cancha">
        {props.headliners.map((item) => (
          <article className="titular" key={item.id}>
            <div>
              <img src={item.foto} alt={item.nombre} />
              <button onClick={() => props.erasePlayer(item)}>X</button>
            </div>
            <p>{item.nombre}</p>
          </article>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    headliners: state.headliners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    erasePlayer(player) {
      dispatch(erasePlayer(player));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Headliners);
