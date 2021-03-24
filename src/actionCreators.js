const setTitular = (players) => {
  return {
    type: "SET_TITULAR",
    players: players,
  };
};

const erasePlayer = (player) => {
  return {
    type: "ERASE_PLAYER",
    player: player,
  };
};

const setSub = (players) => {
  return {
    type: "SET_SUBTITUTE",
    players: players,
  };
};

export { setTitular, erasePlayer, setSub };
