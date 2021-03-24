import React from "react";
import { connect } from "react-redux";
import { erasePlayer } from "../actionCreators";

function Subs(props) {
  return (
    <>
      <h1>Suplentes:</h1>
      <div className="suplentes">
        {props.substitutes.map((item) => (
          <article className="suplente" key={item.id}>
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
    substitutes: state.substitutes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    erasePlayer(player) {
      dispatch(erasePlayer(player));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subs);
