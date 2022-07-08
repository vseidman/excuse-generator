/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excusa").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let person = ["Mi", "El"];
  let subject = ["perro", "iguana", "sapo", "ventilador"];
  let action = ["se comio", "mojo", "destrozo", "ensucio"];
  let object = ["tarea", "franela", "zapato", "telefono"];
  let where = ["en mi casa", "en el carro", "en el colegio"];

  let perInx = Math.floor(Math.random() * person.length);
  let subInx = Math.floor(Math.random() * subject.length);
  let acInx = Math.floor(Math.random() * action.length);
  let obInx = Math.floor(Math.random() * object.length);
  let whInx = Math.floor(Math.random() * where.length);

  return (
    person[perInx] +
    " " +
    subject[subInx] +
    " " +
    action[acInx] +
    " " +
    object[obInx] +
    " " +
    where[whInx]
  );
};
