/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  cardGenerator(simbols, numbers)
  
  //ejecuta la función de generación de cartas inmediatamente al cargar la página y luego se ejecute cada 10 segundos.
  setInterval(()=>{cardGenerator(simbols,numbers)}, 10000)

};

let cardGenerator = function (simb, num){

  let randomSimbols = simb[Math.floor(Math.random() * simb.length)];
  let randomNumbers = num[Math.floor(Math.random() * num.length)];

  let header = document.querySelector(".cardheader");
  header.innerHTML = randomSimbols;

  let body = document.querySelector(".cardbody")
  body.innerHTML = randomNumbers;

  let footer = document.querySelector(".cardfooter");
  footer.innerHTML = randomSimbols;

  if (randomSimbols === '♥' || randomSimbols === '♦'){
    header.style.color = "red"; body.style.color = "red"; footer.style.color = "red";
  }else{
    header.style.color = "black"; body.style.color = "black"; footer.style.color = "black"
  };

  document.querySelector("#btn").addEventListener("click", () => {
    cardGenerator(simbols,numbers);
  });

};

let simbols = ['♦', '♥', '♠', '♣'];
let numbers = ['2','3','4','5','6','7','8','9','10','K','Q','J','A'];







