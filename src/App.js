import React from "react";
import Players from "./components/Players";
import SelectedTeam from "./components/SelectedTeam";
import "./styles/styles.scss";
import store from "./store";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Team Manager</h1>
      <Players />
      <SelectedTeam />
    </main>
  </Provider>
);

export default App;
