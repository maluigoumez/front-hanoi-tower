// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App.js";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client"
import React from "react";
import "./index.css";
import App from "./App.js";

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
