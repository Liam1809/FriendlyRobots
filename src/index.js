import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createReducer } from "redux";
import ReactDOM from "react-dom/client";
import App from "./Containers/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));

// apply redux
const rootReducer = combineReducers({});
const store = createReducer(rootReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
