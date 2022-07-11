/* eslint-disable */
function InitialLoad() {
  //write your code here
  console.log("Archivo JS conectado con el HTML");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let arrExcuse = [who, action, what, when];
  let logs = "<ul>";
  console.log("Arreglos sin mapear: " + JSON.stringify(arrExcuse));
  arrExcuse = arrExcuse.map(arreglo => {
    //Abbreviated version of function (arreglo){ //
    let num = Math.floor(Math.random() * (arreglo.length - 1));
    logs = logs + "<li>" + num + ":" + arreglo[num] + "</li>";
    return arreglo[num];
  });
  logs = logs + "</ul>";
  document.getElementById("logs").innerHTML = logs;
  console.log("Elementos aleatorios por arreglo: " + JSON.stringify(arrExcuse));
  let excuse = arrExcuse.join(" "); //Build the excuse
  let excuseDOM = document.getElementById("excusa");
  excuseDOM.innerText = excuse;
}

window.addEventListener("DOMContentLoaded", InitialLoad);
