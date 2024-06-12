import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";

const cursor = document.querySelector(".ball"); // Element
let ballX = 0;
let ballY = 0;

// Position de la souris
let cursorX = 0;
let cursorY = 0;

// vitesse de la balle
const speed = 0.05;

function animate() {
  // Distance entre le curseur et la balle
  const distX = cursorX - ballX;
  const distY = cursorY - ballY;

  // Mise à jour du rapprochement
  ballX += distX * speed;
  ballY += distY * speed;

  // injection du style
 
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  requestAnimationFrame(animate);
}

// Invocation sinon pas d'animation
animate();

// Mise à jour des valeurs par l'évènement
document.addEventListener("mousemove", function (event) {
  cursorX = event.clientX;
  cursorY = event.clientY;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
