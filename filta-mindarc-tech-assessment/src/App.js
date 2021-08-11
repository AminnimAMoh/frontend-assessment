import React from "react";
import RenderRouts from "./RenderRouts";
import { Router } from "react-router-dom";
import routes from './routes'

import "bootstrap/dist/css/bootstrap.min.css";

import "./custom.scss";

function App() {
  return <div>{RenderRouts(routes)}</div>;
}

export default App;
