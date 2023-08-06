import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter";

import { Provider } from "react-redux";
import { store } from "./store";

// remotes
import Mf1 from "mf1/mf1";
import Mf2 from "mf2/mf2";

const App = () => {
  return (
    <header className="app">
      <div className="shell">Name: shell</div>
      <Counter />
      <div style={{ margin: "20px" }}>
        <Mf1 />
      </div>
      <Mf2 />
    </header>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("shellApp") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
