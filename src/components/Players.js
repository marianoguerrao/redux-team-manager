import React from "react";
import { connect } from "react-redux";
import { setTitular } from "../actionCreators";
import { setSub } from "../actionCreators";

function Players(props) {
  return (
    <>
      <h1>Jugadores</h1>
      <div className="players-container">
        {props.players.map((item) => (
          <article className="player" key={item.id}>
            <img src={item.foto} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <div>
              <button onClick={() => props.setTitular(item)}>Titular</button>
              <button onClick={() => props.setSub(item)}>Suplente</button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setTitular(players) {
      dispatch(setTitular(players));
    },

    setSub(players) {
      dispatch(setSub(players));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
