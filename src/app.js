/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { eventListeners } from "@popperjs/core";

window.onload = function () {
  //write your code here
  cardGenerator(simbols, numbers)
};

//Funcion para generar carta
function cardGenerator (simb, num){

  let randomSimbols = simb[Math.floor(Math.random() * simb.length)];
  let randomNumbers = num[Math.floor(Math.random() * num.length)];

  let header = document.querySelector(".cardheader");
  header.innerHTML = randomSimbols;

  let body = document.querySelector(".cardbody")
  body.innerHTML = randomNumbers;

  let footer = document.querySelector(".cardfooter");
  footer.innerHTML = randomSimbols;

  //Regular ancho y alto de carta
  function sizeCard(){

    let widht = document.getElementById("myWidth").value;
    let height = document.getElementById("myHeight").value;
    let fontSize = Math.min(widht, height) * 0.35;
    
    let card = document.querySelector(".card");
    card.style.width = widht + "px";
    card.style.height = height + "px";

    let header = document.querySelector(".cardheader");
    header.style.fontSize = fontSize + "px";

    let body = document.querySelector(".cardbody")
    body.style.fontSize = fontSize + "px";

    let footer = document.querySelector(".cardfooter");
    footer.style.fontSize = fontSize + "px";
  };

  myWidth.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sizeCard();
    }
  });

  myHeight.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sizeCard();
    }
  });

  //Cambiar de color dependiento de la pinta
  if (randomSimbols === '♥' || randomSimbols === '♦'){
    header.style.color = "red"; body.style.color = "red"; footer.style.color = "red";
  }else{
    header.style.color = "black"; body.style.color = "black"; footer.style.color = "black"
  };

};

let simbols = ['♦', '♥', '♠', '♣'];
let numbers = ['2','3','4','5','6','7','8','9','10','K','Q','J','A'];

//Cambiar de carta presionando el boton
document.querySelector("#btn").addEventListener("click", () => {
  cardGenerator(simbols,numbers);
});

//ejecuta la función de generación de cartas inmediatamente al cargar la página y luego se ejecute cada 10 segundos.
setInterval(()=>{cardGenerator(simbols,numbers)}, 10000)









