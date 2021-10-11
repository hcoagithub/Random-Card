/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palo = ["♦", "♥", "♠", "♣"];
  let numCard = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];

  const iconoSuperior = document.querySelector("#iconoSuperior");
  const iconoInferior = document.querySelector("#iconoInferior");
  const numero = document.querySelector("#numero");
  const carta = document.querySelector(".card");

  numero.innerHTML = numCard[numAleatorio(numCard)];

  let paloAleatorio = palo[numAleatorio(palo)];

  if (paloAleatorio === "♦" || paloAleatorio === "♥") {
    if (carta.classList.contains("black")) {
      carta.classList.remove("black");
    } else {
      carta.classList.add("red");
      iconoSuperior.innerHTML = paloAleatorio;
      iconoInferior.innerHTML = iconoSuperior.innerHTML;
    }
  } else if (paloAleatorio === "♠" || paloAleatorio === "♣") {
    if (carta.classList.contains("red")) {
      carta.classList.remove("red");
    } else {
      carta.classList.add("black");
      iconoSuperior.innerHTML = paloAleatorio;
      iconoInferior.innerHTML = iconoSuperior.innerHTML;
    }
  }
};

function numAleatorio(arr) {
  let num = Math.floor(Math.random() * arr.length);

  return num;
}
