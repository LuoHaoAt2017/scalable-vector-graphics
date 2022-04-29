
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <svg version="1.1" baseProfile="full" width={300} height={200} xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="red"></rect>
      <circle cx={150} cy={100} r={80} fill="green"></circle>
      <text x={150} y={125} fontSize={60} fill="white" textAnchor="middle">SVG</text>
    </svg>
  </React.StrictMode>
);