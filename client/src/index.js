import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import {Menu} from "./Menu";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Menu />, document.getElementById("root"));
registerServiceWorker();
