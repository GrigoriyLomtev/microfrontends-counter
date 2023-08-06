import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Increment from "./components/Increment";

import { Provider } from "react-redux";
import { store } from "./store";

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <Increment />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
