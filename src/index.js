import React from "react";
import ReactDOM from "react-dom/client";
import { App } from './App';

const divRoot = document.querySelector('#root')
//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.createRoot(divRoot).render(<App />);